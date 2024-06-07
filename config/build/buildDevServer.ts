import { BuildOptions } from "./types";
import { Configuration as DevServerConfiguration } from "webpack-dev-server";

export const buildDerServer = (options: BuildOptions): DevServerConfiguration => {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true,
        hot: true
    }
}