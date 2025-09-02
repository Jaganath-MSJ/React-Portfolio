import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react(),
    viteTsconfigPaths(), // For TypeScript path mapping
    svgr({
      include: "**/*.svg?react", // For SVG imports as React components
    }),
  ],
  server: {
    port: 3000, // Match CRA's default port
    open: true, // Auto-open browser
  },
  resolve: {
    alias: {
      "@": "/src", // Optional: Create path alias
    },
  },
});
