import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildCssLoader = (isDev: boolean) => ({
  test: /\.s[ac]ss$/i,
  use: [
    // Creates `style` nodes from JS strings
    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
    // Translates CSS into CommonJS
    {
      loader: 'css-loader',
      options: {
        sourceMap: isDev,
        modules: {
          auto: (resourcePath: string) => Boolean(resourcePath.includes('.module.')),
          localIdentName: isDev
            ? '[path][name]_[local]_[hash:base64:8]'
            : '[path][hash:base64:8]',
        },
      },
    },
    // Compiles Sass to CSS
    {
      loader: 'sass-loader',
      options: { sourceMap: isDev },
    },
  ],
});
