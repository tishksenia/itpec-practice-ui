import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  test: {
    globals: true,
    environment: "happy-dom",
    include: ["src/**/**.spec.ts"],
  },
  resolve: {
    alias: {
      'src': path.resolve(__dirname, './src')
    }
  }
});
