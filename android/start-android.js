#!/bin/env node

require('@app/mobile/var/init').init();
const { execSync } = require('child_process');
const path = require('path');
const { parameters } = require('../var/parameters');

const main = async () => {
  let parametersJoined = 'HELLO=world';

  switch (true) {
    // mac
    case process.platform === 'darwin':
      parametersJoined = parameters().macParsed.join(' ');
      execSync(`${parametersJoined} react-native run-android`, {
        stdio: 'inherit',
        cwd: path.resolve(__dirname, '../'),
      });
      break;

    // linux
    case process.platform === 'linux':
      parametersJoined = parameters().linuxParsed.join(' ');
      execSync(`${parametersJoined} react-native run-android`, {
        stdio: 'inherit',
        cwd: path.resolve(__dirname, '../'),
      });
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
