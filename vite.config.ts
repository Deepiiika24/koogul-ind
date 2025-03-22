import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { configDefaults } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT as unknown as number,
  },
  build: {
    outDir: "dist", // Ensure the build output is placed in "dist"
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts", // Ensure this file exists
    exclude: [...configDefaults.exclude, "dist/**"], // Exclude dist folder from tests
  },
  preview: {
    open: true,
  },
});
