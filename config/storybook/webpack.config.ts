import { BuildPaths } from './../build/types';
import webpack from "webpack";
import path from "path";
import { buildCssLoader } from '../build/loaders/build-css-loader';

export default ({ config }: {config: webpack.Configuration}) => {
  const paths: BuildPaths = {
    src: path.resolve(__dirname, "..", "..", "src"),
    build: "",
    entry: "",
    html: "",
  };
  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push(".ts", ".tsx");

  if (config.module?.rules) {
    config.module.rules = config.module.rules.map(rule => {
      if (typeof rule === 'object' && rule !== null && /svg/.test(rule.test as string)) {
        return {
          ...rule,
          exclude: /\.svg$/i,
        }
      }
      return rule;
    }
    );
  }
  config.module?.rules?.push({
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  });
  config.module?.rules?.push(buildCssLoader(true));
  
  return config;
}