import {defineConfig} from "cypress";
import baseConfig from "./base.config";

export default defineConfig({
    ...baseConfig,
    e2e: {
        ...baseConfig.e2e,
    },
    env: {
        ...baseConfig.env,
        baseUrl: "https://demo.1crmcloud.com/index.php",
        NODE_ENV: "demo",
    }
});
