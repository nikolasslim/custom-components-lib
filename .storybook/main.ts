import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },

  webpackFinal: async (config) => {
    config.module?.rules?.push({
      test: /\.module\.scss$/i,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            esModule: false,
            modules: {
              exportLocalsConvention: "camelCase",
              localIdentName: "[name]__[local]__[hash:base64:5]",
            },
          },
        },
        "sass-loader",
      ],
      include: path.resolve(__dirname, "../"),
    });

    return config;
  },
};

export default config;
