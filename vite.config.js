import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    include: ["react", "react-dom", "lucide-react"],
  },
  build: {
    commonjsOptions: {
      include: [/lucide-react/],
    },
  },
});
