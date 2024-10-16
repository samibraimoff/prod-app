import HTMLWebpackPlugin from "html-webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import webpack from "webpack"
import { BuildPaths } from "./types"

export const buildPlugins = (paths: BuildPaths): webpack.WebpackPluginInstance[] => {
    return [
        new HTMLWebpackPlugin({
            template: paths.output,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].css",
        })
    ]
}