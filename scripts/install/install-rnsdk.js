#!/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const main = async () => {
  const dirpath = path.resolve('./var');

  if (fs.existsSync(path.resolve(dirpath, 'rnsdk'))) {
    return;
  }

  execSync('git clone https://github.com/sotaoi/rnsdk', { cwd: dirpath });
  fs.rmdirSync(path.resolve(dirpath, 'rnsdk/.git'), { recursive: true });
};

main();
