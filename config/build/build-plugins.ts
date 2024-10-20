import HTMLWebpackPlugin from "html-webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin"
import webpack from "webpack"
import { BuildOptions } from "./types"

export const buildPlugins = (options: BuildOptions): webpack.WebpackPluginInstance[] => {
    const { isDev, paths } = options;

    return [
        new HTMLWebpackPlugin({
            template: paths.output,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].css",
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev)
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ReactRefreshPlugin()
    ]
}