#!/bin/env node

require('@app/mobile/var/init').init();
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const { parameters } = require('../var/parameters');
const os = require('os');

const main = async () => {
  const env = {};
  env.internalIps = Object.values(os.networkInterfaces()).reduce(
    (r, list) =>
      r.concat(list.reduce((rr, i) => rr.concat((i.family === 'IPv4' && !i.internal && i.address) || []), [])),
    [],
  );
  fs.writeFileSync(path.resolve('env.json'), JSON.stringify(env, null, 2));

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
