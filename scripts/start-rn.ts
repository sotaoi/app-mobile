#!/bin/env node

import { execSync } from 'child_process';
import path from 'path';

require('@app/mobile/var/init').init();

execSync(`react-native start --host 0.0.0.0 --port 8081`, {
  stdio: 'inherit',
  cwd: path.resolve(__dirname, '../'),
});
