const path = require('path');

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        root: [path.resolve('./lib')],
        alias: {},
      },
    ],
  ],
};
