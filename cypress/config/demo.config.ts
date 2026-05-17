import {defineConfig} from "cypress";
import baseConfig from "./base.config";

const baseUrl = "https://books.toscrape.com";

export default defineConfig({
  ...baseConfig,
  e2e: {
    ...baseConfig.e2e,
    baseUrl,
  },
  env: {
    ...baseConfig.env,
    BASE_URL: baseUrl,
    NODE_ENV: "demo",
  }
});
