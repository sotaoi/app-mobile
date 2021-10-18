#!/bin/env node

const fs = require('fs');
const path = require('path');

const main = async () => {
  require('@app/mobile/var/init').init();

  try {
    fs.copyFileSync(
      path.resolve('./var/patches/metro/require.js'),
      path.resolve('./node_modules/metro/src/lib/polyfills/require.js'),
    );
    fs.copyFileSync(
      path.resolve('./var/patches/react-native/Promise.js'),
      path.resolve('./node_modules/react-native/Libraries/Promise.js'),
    );
    fs.copyFileSync(
      path.resolve('./var/patches/react-navigation-stack/validateDeprecatedConfig.js'),
      path.resolve(
        './node_modules/react-native-router-flux/node_modules/react-navigation-stack/lib/module/utils/validateDeprecatedConfig.js',
      ),
    );
    fs.copyFileSync(
      path.resolve('./var/patches/react-navigation-stack/validateDeprecatedOptions.js'),
      path.resolve(
        './node_modules/react-native-router-flux/node_modules/react-navigation-stack/lib/module/utils/validateDeprecatedOptions.js',
      ),
    );

    fs.existsSync(path.resolve('../pocket/env.json')) &&
      fs.copyFileSync(path.resolve('../pocket/env.json'), path.resolve('./node_modules/@app/omni/env.json'));
  } catch (err) {
    console.warn(err);
  }
};

main();
