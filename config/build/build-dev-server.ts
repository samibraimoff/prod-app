import { BuildOptions } from "./types";
import { Configuration as DevServerConfiguration } from "webpack-dev-server";

export const buildDevServer = (
  options: BuildOptions,
): DevServerConfiguration => {
  return {
    hot: true,
    open: true,
    port: options.port,
    historyApiFallback: true,
  };
};
