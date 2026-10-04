import {defineConfig} from "cypress";
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import webpackPreprocessor from '@cypress/webpack-preprocessor';

export default defineConfig({
  allowCypressEnv: false,
  e2e: {
    specPattern: "cypress/e2e/**/*.spec.ts",
    supportFile: "cypress/support/e2e.ts",
    defaultCommandTimeout: 10000,
    video: true,
    screenshotOnRunFailure: true,
    viewportWidth: 1920,
    viewportHeight: 1080,
    retries: {
      runMode: 1,
      openMode: 0,
    },
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: false,
      json: true
    },
    setupNodeEvents(on, config) {
      const environmentName = process.env.NODE_ENV ?? config.env?.NODE_ENV ?? 'local';
      const envPath = path.resolve(config.projectRoot, `.env.${environmentName}`);

      if (fs.existsSync(envPath)) {
        const result = dotenv.config({path: envPath});
        if (result.error) {
          throw result.error;
        }
      }

      const baseUrl = process.env.BASE_URL ?? config.baseUrl;
      if (!baseUrl) {
        throw new Error(`BASE_URL is required for the "${environmentName}" environment.`);
      }

      config.env = {
        ...config.env,
        NODE_ENV: environmentName,
        BASE_URL: baseUrl,
      };
      config.baseUrl = baseUrl;

      const cypressRoot = path.resolve(config.projectRoot, 'cypress');

      on('file:preprocessor', webpackPreprocessor({
        webpackOptions: {
          resolve: {
            alias: {
              config: path.resolve(cypressRoot, 'config'),
              consts: path.resolve(cypressRoot, 'consts'),
              helpers: path.resolve(cypressRoot, 'helpers'),
              pages: path.resolve(cypressRoot, 'pages'),
              routes: path.resolve(cypressRoot, 'routes'),
            },
            extensions: ['.ts', '.js'],
            modules: [cypressRoot, path.resolve(config.projectRoot, 'node_modules')]
          },
          module: {
            rules: [
              {
                test: /\.ts$/,
                exclude: [/node_modules/],
                use: [
                  {
                    loader: 'ts-loader',
                    options: {
                      transpileOnly: true
                    }
                  }
                ]
              }
            ]
          }
        },
      }));

      return config;
    },
  },
});
