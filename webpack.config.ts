import path from 'path';

import { buildWebpackConfig } from './config/build/build-webpack-config';
import { BuildEnv, BuildOptions, BuildPaths } from './config/build/types';

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  };

  const mode = env.mode || 'development';
  const isDev = env.mode === 'development';
  const PORT = env.port || 3004;

  const options: BuildOptions = {
    mode,
    paths,
    isDev,
    port: PORT,
  };

  return buildWebpackConfig(options);
};
