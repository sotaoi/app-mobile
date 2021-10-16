// require('@sotaoi/config').Config.init(require('@app/mobile/env.json'), {});
const { config } = require('@app/omni/config');
config('');
require('react-native-gesture-handler');
const { App } = require('@app/mobile/lib/main');
const { AppRegistry } = require('react-native');

AppRegistry.registerComponent('qwertypnksmobileboilerplate', () => App);
