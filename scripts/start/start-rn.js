#!/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const main = async () => {
  fs.existsSync(path.resolve('../app-omni/env.json')) &&
    fs.copyFileSync(path.resolve('../app-omni/env.json'), path.resolve('./node_modules/@app/omni/env.json'));

  require('@app/mobile/var/init').init();

  execSync(`react-native start --host 192.168.0.129 --port 8081`, {
    stdio: 'inherit',
    cwd: path.resolve(__dirname, '../'),
  });
};

main();
