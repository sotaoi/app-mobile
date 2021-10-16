#!/bin/env node

const { execSync } = require('child_process');
const path = require('path');

require('@app/mobile/var/init').init();

execSync(`react-native start --port 8081`, {
  stdio: 'inherit',
  cwd: path.resolve(__dirname, '../'),
});
