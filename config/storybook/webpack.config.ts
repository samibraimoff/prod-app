import path from "path";
import webpack, { DefinePlugin } from "webpack";

import { buildCssLoader } from "../build/loaders/build-css-loader";
import { BuildPaths } from "./../build/types";

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    src: path.resolve(__dirname, "..", "..", "src"),
    build: "",
    entry: "",
    html: ""
  };
  config.resolve?.modules?.unshift(paths.src);
  config.resolve?.extensions?.push(".ts", ".tsx");

  if (config.module?.rules) {
    config.module.rules = config.module.rules.map(rule => {
      if (typeof rule === "object" && rule !== null && /svg/.test(rule.test as string)) {
        return {
          ...rule,
          exclude: /\.svg$/i
        };
      }
      return rule;
    }
    );
  }
  config.module?.rules?.push({
    test: /\.svg$/,
    use: ["@svgr/webpack"]
  });
  config.module?.rules?.push(buildCssLoader(true));

  config.plugins.push(
    new DefinePlugin({
      __IS_DEV__: true
    })
  );

  return config;
}