#!/bin/env node

import { execSync } from 'child_process';
import path from 'path';

require('@app/mobile/var/init').init();

execSync(`react-native start --port 8081`, {
  stdio: 'inherit',
  cwd: path.resolve(__dirname, '../'),
});
