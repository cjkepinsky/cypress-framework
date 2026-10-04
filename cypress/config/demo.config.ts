import {defineConfig} from "cypress";
import baseConfig from "./base.config";

const fallbackBaseUrl = "https://books.toscrape.com";
const baseUrl = process.env.BASE_URL ?? fallbackBaseUrl;

export default defineConfig({
  ...baseConfig,
  e2e: {
    ...baseConfig.e2e,
    baseUrl,
  },
  env: {
    ...baseConfig.env,
    NODE_ENV: "demo",
    BASE_URL: baseUrl,
  }
});
