import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "DigitalBurj",
    short_name: "DigitalBurj",
    description: "Technology company in Dubai: Academy, business automation, software builds, verified talent.",
    start_url: "/",
    display: "standalone",
    background_color: "#F5F1E8",
    theme_color: "#1B4D8F",
    icons: [{ src: "/brand/db-icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}