import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    fs: {
      // Allow case-insensitive file system access
      strict: false,
    },
  },
  build: {
    outDir: 'build',
    emptyOutDir: true, // also necessary
  }
});
