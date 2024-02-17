import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/portfolio/",
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
    },
  },
  server: {
    host: true,
    port: 3000,
  },
  assetsInclude: ["**/*.docx"],
});
