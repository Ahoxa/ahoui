import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  framework: { name: "@storybook/react-vite", options: {} },
  stories: ["../src/**/*.stories.@(tsx|ts)"],
  addons: ["@storybook/addon-docs", "@storybook/addon-a11y"],
  core: { disableTelemetry: true },
  async viteFinal(config) {
    const { default: viteConfig } = await import("./vite.config.ts");
    return mergeConfig(config, viteConfig);
  },
};
export default config;
