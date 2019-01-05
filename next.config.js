/* eslint-disable */
const withCss = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');

module.exports = withSass({
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
      },
    )
    // config.output.path = `${__dirname}/.lean`
    return config
  }
});

// module.exports = {
//   webpack: (config, { defaultLoaders }) => {
//     config.module.rules.push({
//       test: /\.scss$/,
//       use: [
//         defaultLoaders.babel,
//         {
//           loader: require('styled-jsx/webpack').loader,
//           options: {
//             type: 'scoped'
//           }
//         },
//         'sass-loader'
//       ]
//     })

//     return config
//   }
// }