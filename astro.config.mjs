// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://maulasyakur.github.io",
  base: import.meta.env.BASE_URL, // Must match your GitHub repository name exactly
  output: "static", // GitHub Pages only supports static sites
});
