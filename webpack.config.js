const path = require('path');
const { merge } = require('webpack-merge');
const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  return merge(config, {
    resolve: {
      alias: {
        'react-native$': 'react-native-web',
      },
    },
    entry: path.resolve(__dirname, 'index.web.js'),
  });
};
