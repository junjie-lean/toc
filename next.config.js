/* eslint-disable */
const withSass = require('@zeit/next-sass');
module.exports = withSass({
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.(swf|ttf|eot|svg|woff(2))(\?[a-z0-9]+)?$/,
        loader: 'file-loader',
      }, {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,//kb
              name: '/[name].[ext]',
            },
          }
        ]
      },
    )
    config.node = {
      fs: "empty"
    }
    return config
  },
  distDir: "build"
});
