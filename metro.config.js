const path = require('path');

const extraNodeModules = {
  react: path.resolve('./node_modules/react'),
  'react-dom': path.resolve('./node_modules/react-dom'),
  'react-native': path.resolve('./node_modules/react-native'),
  redux: path.resolve('./node_modules/redux'),
  'react-redux': path.resolve('./node_modules/react-redux'),
};

const blacklistRegexes = [/scripts[\/\\].*/, /var[\/\\].*/];
const watchFolders = [
  path.resolve('./../app-client'),
  path.resolve('./../packages/sotaoi-client'),
  path.resolve('./../packages/sotaoi-omni'),
];

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  resolver: {
    extraNodeModules,
    blacklistRE: require('metro-config/src/defaults/blacklist')(blacklistRegexes),
  },
  watchFolders,
};
