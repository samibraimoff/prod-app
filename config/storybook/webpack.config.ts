import path from 'path';
import webpack from 'webpack';

import { buildCssLoader } from '../build/build-loaders/build-css-loader';
import { BuildPaths } from '../build/types';

export default ({ config }: {config: webpack.Configuration}) => {
  const paths: BuildPaths = {
    entry: '',
    html: '',
    output: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  config.resolve?.modules?.unshift(paths.src);
  config.resolve?.extensions?.push('.ts', '.tsx');

  // eslint-disable-next-line
  config.module.rules = config.module.rules.map((rule: webpack.RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return {
        ...rule,
        exclude: /\.svg$/i,
      };
    }
    return rule;
  });
  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });

  config.module?.rules?.push(buildCssLoader(true));
  config.plugins?.push(
    new webpack.DefinePlugin({
      __IS_DEV__: true,
    }),
  );
  return config;
};
