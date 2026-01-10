import { ResolveOptions } from "webpack";

import { BuildOptions } from "./types";

export const buildResolvers = (options: BuildOptions): ResolveOptions => {
  return {
    extensions: [".ts", ".tsx", ".js"],
    preferAbsolute: true,
    modules: [options.paths.src, "node_modules"],
    mainFiles: ["index"],
    alias: {}
  };
};
