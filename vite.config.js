import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base:"/portfolio/",
  plugins: [react()],
  server:{
    host : true,
    port : 3000
  },
  build: {
    rollupOptions: {
        output:{
            manualChunks(id) {
                if (id.includes('node_modules')) {
                    return id.toString().split('node_modules/')[1].split('/')[0].toString();
                }
            }
        }
    }
}
})