import icon from "astro-icon";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-blog-cip.netlify.app",
  integrations: [icon(), sitemap(), react()],
});
