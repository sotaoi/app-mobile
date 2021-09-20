#!/bin/env node

const { execSync, exec } = require('child_process');
const { parameters } = require('./parameters');
const path = require('path');

const main = async () => {
  let whichXcodebuild = '';
  let isMacAndHasXcodebuild = false;
  let whichPod = '';
  let hasPod = false;
  let parametersJoined = 'HELLO=world';

  const cprocess = exec('npx react-native start --reset-cache', { cwd: path.resolve('./') });
  setTimeout(() => {
    cprocess.kill();
  }, 1500);

  switch (true) {
    // mac
    case process.platform === 'darwin':
      try {
        whichXcodebuild = execSync('which xcodebuild').toString();
      } catch (err) {
        whichXcodebuild = '';
      }
      isMacAndHasXcodebuild = !!whichXcodebuild.length;
      try {
        whichPod = execSync('which pod').toString();
      } catch (err) {
        whichPod = '';
      }
      hasPod = !!whichPod.length;
      parametersJoined = parameters().macParsed.join(' ');
      break;
    // linux
    case process.platform === 'linux':
      parametersJoined = parameters().linuxParsed.join(' ');
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

  // ios
  if (isMacAndHasXcodebuild) {
    execSync('xcodebuild clean', {
      stdio: 'inherit',
      cwd: path.resolve('./ios'),
    });
    if (hasPod) {
      execSync('pod install', { cwd: path.resolve('./ios') });
    }
  }

  // android
  execSync(`${parametersJoined} ./gradlew clean`, {
    stdio: 'inherit',
    cwd: path.resolve('./android'),
  });
};

main();
