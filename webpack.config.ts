import path from "path";
import webpack from "webpack";
import { buildWebpackConfig } from "./config/build/build-webpack-config";
import { BuildPaths, BuildMode } from "./config/build/types";

const paths: BuildPaths = {
  entry: path.resolve(__dirname, "src", "index.ts"),
  output: path.resolve(__dirname, "dist"),
  html: path.resolve(__dirname, "public", "index.html"),
};

const mode = "development";
const isDev = mode === "development";

const options = {
  mode: "production" as BuildMode,
  paths: paths,
  isDev,
};

const config: webpack.Configuration = buildWebpackConfig(options);

export default config;
