import { RuleSetRule } from "webpack";

import { buildCssLoader } from "./loaders/build-css-loader";
import { BuildOptions } from "./types";

export const buildLoaders = ({ isDev }: BuildOptions): RuleSetRule[] => {
  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/
  };
  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"]
      }
    }
  };
  const cssLoader = buildCssLoader(isDev);

  const svgrLoader = {
    test: /\.svg$/,
    use: ["@svgr/webpack"]
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: "file-loader"
      }
    ]
  };

  return [babelLoader, tsLoader, cssLoader, svgrLoader, fileLoader];
};
