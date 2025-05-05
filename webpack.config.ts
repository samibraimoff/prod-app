import path from "path";
import { buildWebpackConfig } from "./config/build/build-webpack-config";
import { BuildPaths, BuildOptions, BuildEnv } from "./config/build/types";

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.ts"),
    output: path.resolve(__dirname, "dist"),
    html: path.resolve(__dirname, "public", "index.html"),
  };

  const mode = env.mode || "development";
  const isDev = env.mode === "development";
  const PORT = env.port || 3004;

  const options: BuildOptions = {
    mode,
    paths: paths,
    isDev,
    port: PORT,
  };

  return buildWebpackConfig(options);
};
