// @ts-check
import { defineConfig } from "astro/config";

const baseUrl = import.meta.env.PUBLIC_BASE_URL || "/portfolio/"; // Default to /portfolio/ if not set

// https://astro.build/config
export default defineConfig({
  site: "https://maulasyakur.github.io",
  base: baseUrl, // Must match your GitHub repository name exactly
  output: "static", // GitHub Pages only supports static sites
});
