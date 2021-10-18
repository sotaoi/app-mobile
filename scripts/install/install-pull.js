#!/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const { Helper } = require('@sotaoi/omni/helper');

const main = async () => {
  const pullItems = {
    '@app/client': path.resolve('../app-client'),
    '@app/omni': path.resolve('../app-omni'),
    '@sotaoi/client': path.resolve('../packages/sotaoi-client'),
    '@sotaoi/omni': path.resolve('../packages/sotaoi-omni'),
  };
  for (const [pkgNamespace, pkgPath] of Object.entries(pullItems)) {
    let buildBinary = null;
    if (pkgNamespace === '@app/client') {
      buildBinary = 'npm run build:aclient';
    }
    if (pkgNamespace === '@app/omni') {
      buildBinary = 'npm run build:aomni';
    }
    if (pkgNamespace === '@sotaoi/client') {
      buildBinary = 'npm run build:sclient';
    }
    if (pkgNamespace === '@sotaoi/omni') {
      buildBinary = 'npm run build:somni';
    }
    if (!buildBinary) {
      console.error('Failed to build package before pulling, skipping this one...');
      continue;
    }
    execSync(buildBinary, { stdio: 'inherit', cwd: pkgPath });
    fs.rmdirSync(path.resolve(`./node_modules/${pkgNamespace}`), { recursive: true });
    Helper.copyRecursiveSync(
      fs,
      path,
      path.resolve(pkgPath, 'deployment'),
      path.resolve(`./node_modules/${pkgNamespace}`),
      [path.resolve(pkgPath, 'deployment', 'node_modules')],
    );
  }

  fs.existsSync(path.resolve('../pocket/env.json')) &&
    fs.copyFileSync(path.resolve('../pocket/env.json'), path.resolve('./node_modules/@app/omni/env.json'));
};

main();
