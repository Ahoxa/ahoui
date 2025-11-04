import { defineConfig } from "vite";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [vanillaExtractPlugin()],
  resolve: {
    alias: {
      "@ahoui/core": resolve(__dirname, "../../core/src"),
    },
  },
});
