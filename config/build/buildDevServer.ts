import { type Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { type BuildOptions } from './types';

export const buildDerServer = (options: BuildOptions): DevServerConfiguration => ({
    port: options.port,
    open: true,
    historyApiFallback: true,
    hot: true,
});
