import { buildLoaders } from "./build-loaders";
import { buildPlugins } from "./build-plugins";
import { buildResolvers } from "./build-resolvers";
import { BuildOptions } from "./types";

export const buildWebpackConfig = (options: BuildOptions) => {
  const { mode, paths, isDev } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.output,
      clean: true,
    },
    plugins: buildPlugins(paths),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
  };
};
