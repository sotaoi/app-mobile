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
      execSync(`${parametersJoined} ./gradlew assembleRelease`, {
        cwd: path.resolve(__dirname),
        stdio: 'inherit',
      });

      break;
    // linux
    case process.platform === 'linux':
      parametersJoined = parameters().linuxParsed.join(' ');
      execSync(`${parametersJoined} ./gradlew assembleRelease`, {
        cwd: path.resolve(__dirname),
        stdio: 'inherit',
      });

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
};

main();
