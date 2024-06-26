import type webpack from 'webpack';
import { type BuildOptions } from './types';

export const buildResolvers = (options: BuildOptions): webpack.ResolveOptions => ({
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [
        options.paths.src, 'node_modules',
    ],
    alias: {},
    mainFiles: ['index'],
});
