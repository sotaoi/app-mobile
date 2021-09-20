#!/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const main = async () => {
  const dirpath = path.resolve('./var');

  if (fs.existsSync(path.resolve(dirpath, 'rnsdk'))) {
    return;
  }

  execSync('git clone https://github.com/sotaoi/rnsdk', { cwd: dirpath });
  fs.rmdirSync(path.resolve(dirpath, 'rnsdk/.git'), { recursive: true });
};

main();
