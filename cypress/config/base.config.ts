import {defineConfig} from "cypress";
import path from 'path';
import dotenv from 'dotenv';
import webpackPreprocessor from '@cypress/webpack-preprocessor';

export default defineConfig({
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
    setupNodeEvents(on, config) {
      const envPath = path.resolve(process.cwd(), `.env.${process.env.NODE_ENV || 'local'}`);

      try {
        const result = dotenv.config({path: envPath});
        if (result.error) {
          console.error("Error loading .env file:", result.error);
        }
      } catch (error) {
        console.error("Error loading .env file:", error);
      }

      config.env = {
        ...config.env,
        NODE_ENV: process.env.NODE_ENV,
        BASE_URL: process.env.BASE_URL,
        USERNAME: process.env.USERNAME,
        PASSWORD: process.env.PASSWORD,
      };

      on('file:preprocessor', webpackPreprocessor({
        webpackOptions: {
          resolve: {
            alias: {
              pages: path.resolve(__dirname, '..', 'pages')
            },
            extensions: ['.ts', '.js'],
            modules: [path.resolve(__dirname, '..'), 'node_modules']
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
  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
    specPattern: "cypress/component/**/*.ts",
  },
});