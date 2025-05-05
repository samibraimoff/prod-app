import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack, { ProgressPlugin } from "webpack";
import { BuildPaths } from "./types";

export const buildPlugins = (
  paths: BuildPaths,
): webpack.WebpackPluginInstance[] => {
  return [
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new ProgressPlugin(),
  ];
};
