import {
  WebpackPluginInstance,
  ProgressPlugin,
  DefinePlugin,
  HotModuleReplacementPlugin,
} from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer"
import { BuildOptions } from "./types";

export const buildPlugins = (
  options: BuildOptions,
): WebpackPluginInstance[] => {
  return [
    new HTMLWebpackPlugin({
      template: options.paths.html,
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash].css",
      chunkFilename: "css/[name].[contenthash].css",
    }),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(options.isDev),
    }),
    new HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin({
      openAnalyzer: false
    })
  ];
};
