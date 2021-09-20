require('@app/mobile/lib/global').init(require('@app/mobile/env.json'));
require('react-native-gesture-handler');
const { App } = require('@app/mobile/lib/mobile.entry');
const { AppRegistry } = require('react-native');

AppRegistry.registerComponent('qwertypnksmobileboilerplate', () => App);
