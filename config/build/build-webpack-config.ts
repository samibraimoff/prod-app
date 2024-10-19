import webpack from "webpack"

import { buildPlugins } from "./build-plugins";
import { buildResolvers } from "./build-resolvers";
import { buildLoaders } from "./build-loaders";
import { BuildOptions } from "./types";
import { buildDevServer } from "./build-dev-server";

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
    const { mode, paths, isDev } = options;
    return {
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash:8].js",
            path: paths.build,
            clean: true,
        },
        mode,
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolvers(options),
        devtool: isDev ? "inline-source-map" : undefined,
        devServer: isDev ? buildDevServer(options) : undefined
    }
}