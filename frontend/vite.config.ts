import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Alfad is browser-only and published under https://sadirano.github.io/alfad/,
// so assets must resolve under the /alfad/ base. There is no backend, hence no
// /api dev proxy, and the build emits a plain dist/ for GitHub Pages.
export default defineConfig({
  base: "/alfad/",
  plugins: [react()],
  server: {
    port: 5173,
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
