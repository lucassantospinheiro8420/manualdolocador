import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    TanStackRouterVite({ autoCodeSplitting: true }),
    react(),
    tailwindcss(),
    tsConfigPaths(),
  ],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.names?.includes("mockup-completo.webp")) {
            return "assets/mockup-completo.webp";
          }
          if (assetInfo.names?.includes("ebook-tablet.webp")) {
            return "assets/ebook-tablet.webp";
          }
          return "assets/[name]-[hash][extname]";
        },
      },
    },
  },
});
