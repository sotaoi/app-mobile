#!/bin/env node

import 'child_process';
import fs from 'fs';
import path from 'path';

const main = async (): Promise<void> => {
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
      path.resolve('./node_modules/react-navigation-stack/lib/module/utils/validateDeprecatedConfig.js'),
    );
    fs.copyFileSync(
      path.resolve('./var/patches/react-navigation-stack/validateDeprecatedOptions.js'),
      path.resolve('./node_modules/react-navigation-stack/lib/module/utils/validateDeprecatedOptions.js'),
    );
  } catch (err) {
    console.warn(err);
  }
};

main();
