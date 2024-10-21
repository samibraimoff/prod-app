import { Configuration as DevServerConfig } from 'webpack-dev-server';
import { BuildOptions } from './types';

export const buildDevServer = (options: BuildOptions): DevServerConfig => ({
    port: options.port,
    open: true,
    hot: true,
    historyApiFallback: true,
});
