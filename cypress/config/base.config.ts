import { defineConfig } from "cypress";
import path from 'path';
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
      runMode: 2,
      openMode: 0,
    },
    setupNodeEvents(on, config) {
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
    },
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
    specPattern: "cypress/component/**/*.ts",
  },
  env: {
    baseUrl: "http://localhost:3000",
    ENVIRONMENT: "local",
  },
});