import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "DigitalBurj — Learn. Build. Work. Grow. Go Global.",
    short_name: "DigitalBurj",
    description: "Practical skills, technology and opportunity ecosystem.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A0616",
    theme_color: "#2EE6FF",
    icons: [{ src: "/brand/db-icon-aurora.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
