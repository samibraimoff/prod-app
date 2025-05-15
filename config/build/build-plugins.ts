import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack, { ProgressPlugin } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types';

export const buildPlugins = (
    options: BuildOptions,
): webpack.WebpackPluginInstance[] => [
    new HTMLWebpackPlugin({
        template: options.paths.html,
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash].css',
        chunkFilename: 'css/[name].[contenthash].css',
    }),
    new webpack.DefinePlugin({
        __IS_DEV__: JSON.stringify(options.isDev),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin({
        openAnalyzer: false,
    }),
];
