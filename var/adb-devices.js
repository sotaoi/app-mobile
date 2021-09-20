#!/bin/env node

const { execSync } = require('child_process');
const { parameters } = require('./parameters');
const path = require('path');

const main = async () => {
  let adbBinary = null;
  let parametersJoined = 'HELLO=world';

  switch (true) {
    // mac
    case process.platform === 'darwin':
      parametersJoined = parameters().macParsed.join(' ');
      adbBinary = path.resolve('./var/rnsdk/sdk-mac/mac-android-sdk/platform-tools/adb');
      break;
    // linux
    case process.platform === 'linux':
      parametersJoined = parameters().linuxParsed.join(' ');
      adbBinary = path.resolve('./var/rnsdk/sdk-linux/linux-android-sdk/platform-tools/adb');
      break;
    // windows (not supported)
    case process.platform === 'win32':
      console.error('windows is not supported');
      return;
    // unknown operating system
    default:
      console.error('unknown operating system');
      return;
  }

  if (!adbBinary) {
    process.exit(1);
  }

  execSync(`${parametersJoined} ${adbBinary} devices`, {
    stdio: 'inherit',
    cwd: path.resolve('./android'),
  });
};

main();

// ios
// todo

// android
//
