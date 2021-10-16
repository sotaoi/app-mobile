const { init } = require('@app/omni/config');
init(
  (configs, fs, path, extraVars) => {
    false && console.info(`Acknowledging configs: ${JSON.stringify(configs)}`);
    false && console.info(`Acknowledging fs: ${JSON.stringify(fs)}`);
    false && console.info(`Acknowledging path: ${JSON.stringify(path)}`);
    const Config = require('@sotaoi/config').Config;
    Config.init(require('@app/omni/env.json'));
    for (const [key, val] of Object.entries(Config.dumpEnvVars())) {
      if (val === null || typeof val === 'undefined' || typeof val === 'boolean') {
        continue;
      }
      if (typeof val === 'number' || typeof val === 'string') {
        process.env[key] = val.toString();
        continue;
      }
      process.env[key] = JSON.stringify(val);
    }
    for (const [key, val] of Object.entries(extraVars)) {
      process.env[key] = typeof val === 'string' ? val : undefined;
    }
  },
  null,
  null,
  {},
);
require('react-native-gesture-handler');
const { App } = require('@app/mobile/lib/main');
const { AppRegistry } = require('react-native');

AppRegistry.registerComponent('qwertypnksmobileboilerplate', () => App);
