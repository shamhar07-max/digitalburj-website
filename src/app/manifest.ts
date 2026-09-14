import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "DigitalBurj — Learn. Build. Work. Grow. Go Global.",
    short_name: "DigitalBurj",
    description: "Practical skills, technology and opportunity ecosystem.",
    start_url: "/",
    display: "standalone",
    background_color: "#05060D",
    theme_color: "#00E0FF",
    icons: [{ src: "/favicon.ico", sizes: "any", type: "image/x-icon" }],
  };
}
