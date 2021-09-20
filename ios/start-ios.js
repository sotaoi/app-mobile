#!/bin/env node

require('@app/mobile/var/init').init();
const { execSync } = require('child_process');
const { parameters } = require('../var/parameters');
const path = require('path');

const main = async () => {
  let parametersJoined = 'HELLO=world';

  switch (true) {
    // mac
    case process.platform === 'darwin':
      parametersJoined = parameters().macParsed.join(' ');
      execSync(`${parametersJoined} pod install`, {
        stdio: 'inherit',
        cwd: path.resolve(__dirname, '../ios'),
      });
      execSync(`${parametersJoined} npx react-native run-ios`, {
        stdio: 'inherit',
        cwd: path.resolve(__dirname, '../'),
      });
      break;

    // linux
    case process.platform === 'linux':
      console.error('Linux is not supported');
      break;

    // windows (not supported)
    case process.platform === 'win32':
      console.error('Windows is not supported');
      return;

    // unknown operating system
    default:
      console.error('Unknown operating system');
      return;
  }
};

main();
