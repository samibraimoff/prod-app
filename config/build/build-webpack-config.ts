import path from "path";
import { BuildOptions } from "./types";
import { buildPlugins } from "./build-plugins";
import { buildLoaders } from "./build-loaders";
import { buildResolvers } from "./build-resolvers";

export const buildWebpackConfig = (options: BuildOptions) => {
    return {
        mode: options.mode,
        entry: options.paths.entry,
        output: {
          filename: "[name].[contenthash:12].js",
          path: options.paths.dist,
          clean: true,
        },
        plugins: buildPlugins(options),
        module: {
          rules: buildLoaders(),
        },
        resolve: buildResolvers(),
      }
}