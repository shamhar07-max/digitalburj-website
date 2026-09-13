import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // Academy served same-origin: /platform/* → Academy app (no ports, shared cookies).
  async rewrites() {
    const upstream = process.env.ACADEMY_UPSTREAM || "http://127.0.0.1:3100";
    return [{ source: "/platform/:path*", destination: `${upstream}/platform/:path*` }];
  },
};

export default nextConfig;
