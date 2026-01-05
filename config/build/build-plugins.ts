import HTMLWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {
  DefinePlugin,
  HotModuleReplacementPlugin,
  ProgressPlugin,
  WebpackPluginInstance
} from "webpack";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

import { BuildOptions } from "./types";

export const buildPlugins = (
  options: BuildOptions
): WebpackPluginInstance[] => {
  const plugins = [
    new HTMLWebpackPlugin({
      template: options.paths.html
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash].css",
      chunkFilename: "css/[name].[contenthash].css"
    }),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(options.isDev)
    })
  ];

  if (options.isDev) {
    plugins.push(new HotModuleReplacementPlugin());
    plugins.push(new BundleAnalyzerPlugin({
      openAnalyzer: false
    }));
  }

  return plugins;
};
