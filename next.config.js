/* eslint-disable */
// const withCss = require('@zeit/next-css');

// if (typeof require !== 'undefined') {
//   require.extensions['.css'] = file => {}
// }

// module.exports = withCss()

const withCss = require('@zeit/next-css');

if (typeof require !== 'undefined') {
  require.extensions['.css'] = (file) => { }
}
module.exports = withCss({
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push(
      {
        test: /\.(swf|ttf|eot|svg|woff(2))(\?[a-z0-9]+)?$/,
        loader: 'file-loader',
      },
      {
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
      }
    )
    // config.output.path = `${__dirname}/.lean`
    return config
  }
});