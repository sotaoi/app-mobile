const path = require('path');
const blacklist = require('metro-config/src/defaults/blacklist');
const { getDefaultConfig } = require('metro-config');

const extraNodeModules = {
  react: path.dirname(require.resolve('@sotaoi/client/node_modules/react')),
  'react-dom': path.dirname(require.resolve('@sotaoi/client/node_modules/react-dom')),
  'react-native': path.resolve('./node_modules/react-native'),
  redux: path.resolve('./node_modules/redux'),
  'react-redux': path.resolve('./node_modules/react-redux'),
};

const blacklistRegexes = [/build[\/\\].*/, /deployment[\/\\].*/, /scripts[\/\\].*/, /var[\/\\].*/];
const watchFolders = [
  path.resolve('./../app-client'),
  path.resolve('./../app-omni'),
  path.resolve('./../packages/sotaoi-client'),
  path.resolve('./../packages/sotaoi-omni'),
];

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig();
  return {
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
        },
      }),
    },
    resolver: {
      assetExts: assetExts.filter((ext) => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg'],
    },
    resolver: {
      extraNodeModules,
      blacklistRE: blacklist(blacklistRegexes),
    },
    watchFolders,
  };
})();
