"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Evidence Globe — signature 3D moment. Particle sphere in brand hues,
 * two orbit rings, node beacons. Auto-rotate + mouse tilt + scroll-scrubbed
 * camera. Pauses offscreen / hidden tab / reduced motion. Disposes cleanly.
 */
export function Globe3D({ className = "" }: { className?: string }) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const W = mount.clientWidth || 600;
    const H = mount.clientHeight || 400;
    const mobile = W < 640;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(W, H);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 100);
    camera.position.set(0, 0.35, 3.4);
    camera.lookAt(0, 0, 0);

    const globe = new THREE.Group();
    scene.add(globe);

    // — particle sphere —
    const COUNT = mobile ? 500 : 950;
    const pos = new Float32Array(COUNT * 3);
    const col = new Float32Array(COUNT * 3);
    const palette = ["#0B6B4F", "#D9481C", "#0E7C6B", "#E8721C", "#8A4A06"].map(
      (c) => new THREE.Color(c)
    );
    const R = 1.05;
    for (let i = 0; i < COUNT; i++) {
      // fibonacci sphere for even coverage
      const phi = Math.acos(1 - (2 * (i + 0.5)) / COUNT);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      const jitter = 0.94 + Math.random() * 0.1;
      pos[i * 3] = R * jitter * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = R * jitter * Math.cos(phi);
      pos[i * 3 + 2] = R * jitter * Math.sin(phi) * Math.sin(theta);
      const c = palette[i % palette.length]!;
      col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    pGeo.setAttribute("color", new THREE.BufferAttribute(col, 3));
    const pMat = new THREE.PointsMaterial({
      size: 0.022, vertexColors: true, transparent: true, opacity: 0.9,
      sizeAttenuation: true, depthWrite: false,
    });
    globe.add(new THREE.Points(pGeo, pMat));

    // — orbit rings —
    const ringMat1 = new THREE.LineBasicMaterial({ color: "#D9481C", transparent: true, opacity: 0.55 });
    const ringMat2 = new THREE.LineBasicMaterial({ color: "#0E7C6B", transparent: true, opacity: 0.55 });
    const mkRing = (rx: number, ry: number, mat: THREE.Material) => {
      const pts: THREE.Vector3[] = [];
      for (let i = 0; i <= 128; i++) {
        const a = (i / 128) * Math.PI * 2;
        pts.push(new THREE.Vector3(Math.cos(a) * rx, 0, Math.sin(a) * ry));
      }
      const g = new THREE.BufferGeometry().setFromPoints(pts);
      return new THREE.Line(g, mat);
    };
    const ring1 = mkRing(1.55, 0.62, ringMat1);
    ring1.rotation.x = Math.PI / 2 - 0.32;
    const ring2 = mkRing(1.7, 0.7, ringMat2);
    ring2.rotation.x = Math.PI / 2 + 0.38;
    ring2.rotation.y = 0.5;
    globe.add(ring1, ring2);

    // — node beacons —
    const nodeGeo = new THREE.SphereGeometry(0.035, 12, 12);
    const nodeCols = ["#D9481C", "#0B6B4F", "#E8721C", "#0E7C6B"];
    const nodes = nodeCols.map((c, i) => {
      const m = new THREE.Mesh(nodeGeo, new THREE.MeshBasicMaterial({ color: c }));
      const a = (i / nodeCols.length) * Math.PI * 2;
      m.position.set(Math.cos(a) * 1.25, Math.sin(a * 2) * 0.4, Math.sin(a) * 1.25);
      globe.add(m);
      return m;
    });

    // — scroll-scrubbed camera (GSAP) —
    gsap.registerPlugin(ScrollTrigger);
    let scrub: gsap.core.Tween | null = null;
    if (!reduce) {
      scrub = gsap.to(globe.rotation, {
        y: "+=" + Math.PI * 0.9,
        ease: "none",
        scrollTrigger: { trigger: mount, start: "top bottom", end: "bottom top", scrub: 1 },
      });
    }

    let raf = 0;
    let tx = 0, ty = 0, cx = 0, cy = 0;
    let visible = true;
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; }, { threshold: 0 });
    io.observe(mount);

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const r = mount.getBoundingClientRect();
      tx = (e.clientX - r.left) / Math.max(r.width, 1) - 0.5;
      ty = (e.clientY - r.top) / Math.max(r.height, 1) - 0.5;
    };

    const clock = new THREE.Clock();
    const render = () => {
      renderer.render(scene, camera);
    };

    if (reduce) {
      globe.rotation.y = 0.6;
      render();
    } else {
      const tick = () => {
        raf = requestAnimationFrame(tick);
        if (!visible || document.hidden) return;
        const dt = Math.min(clock.getDelta(), 0.05);
        globe.rotation.y += dt * 0.12;
        cx += (tx - cx) * 0.05;
        cy += (ty - cy) * 0.05;
        globe.rotation.x = cy * 0.35;
        globe.rotation.z = cx * 0.1;
        const t = clock.elapsedTime;
        nodes.forEach((n, i) => {
          const s = 1 + 0.25 * Math.sin(t * 2 + i * 1.7);
          n.scale.setScalar(s);
        });
        render();
      };
      tick();
    }

    const onResize = () => {
      const w = mount.clientWidth || 600;
      const h = mount.clientHeight || 400;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      scrub?.scrollTrigger?.kill();
      scrub?.kill();
      io.disconnect();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onMove);
      scene.traverse((o) => {
        const mesh = o as THREE.Mesh;
        if (mesh.geometry) mesh.geometry.dispose();
        const mat = (mesh as THREE.Mesh).material as THREE.Material | THREE.Material[] | undefined;
        if (Array.isArray(mat)) mat.forEach((m) => m.dispose());
        else if (mat) mat.dispose();
      });
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className={className} aria-hidden />;
}
