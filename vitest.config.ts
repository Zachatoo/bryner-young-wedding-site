/// <reference types="vitest" />

import { defineConfig } from "vitest/config";
import * as path from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, "components"),
      hooks: path.resolve(__dirname, "hooks"),
      styles: path.resolve(__dirname, "styles"),
    },
  },
});
