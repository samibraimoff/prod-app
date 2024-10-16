import path from "path"
import webpack from "webpack"
import { buildWebpackConfig } from "./config/build/build-webpack-config";
import { BuildEnv, BuildPaths } from "./config/build/types";

export default (env: BuildEnv) => {
  const mode = env.mode || "development";
  const PORT = env.port || 4040;
  const isDev = mode === "development";


  const paths: BuildPaths = {
    build: path.resolve(__dirname, "dist"),
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: path.resolve(__dirname, "public", "index.html"),
  }
  const config: webpack.Configuration = buildWebpackConfig({
    paths,
    mode,
    isDev,
    port: PORT
  });

  return config
};
