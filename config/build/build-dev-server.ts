import { Configuration as DevServerConfiguration } from 'webpack-dev-server';

import { BuildOptions } from './types';

export const buildDevServer = (
  options: BuildOptions,
): DevServerConfiguration => ({
  hot: true,
  open: true,
  port: options.port,
  historyApiFallback: true,
});
