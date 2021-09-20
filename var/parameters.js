const path = require('path');

const _parameters = {
  mac: {
    androidSdkDirectory: path.resolve(__dirname, './rnsdk/sdk-mac/mac-android-sdk'),
    androidSdkRoot: path.resolve(__dirname, './rnsdk/sdk-mac/mac-android-sdk/build-tools'),
    javaDirectory: path.resolve(__dirname, './rnsdk/sdk-mac/mac-java/Contents/Home'),
  },
  linux: {
    androidSdkDirectory: path.resolve(__dirname, './rnsdk/sdk-linux/linux-android-sdk'),
    androidSdkRoot: path.resolve(__dirname, './rnsdk/sdk-linux/linux-android-sdk/build-tools'),
    javaDirectory: path.resolve(__dirname, './rnsdk/sdk-linux/linux-java'),
  },
};
_parameters.macParsed = [
  `ANDROID_HOME="${_parameters.mac.androidSdkDirectory}"`,
  `ANDROID_SDK_ROOT="${_parameters.mac.androidSdkRoot}"`,
  `JAVA_HOME="${_parameters.mac.javaDirectory}"`,
];
_parameters.linuxParsed = [
  `ANDROID_HOME="${_parameters.linux.androidSdkDirectory}"`,
  `ANDROID_SDK_ROOT="${_parameters.linux.androidSdkRoot}"`,
  `JAVA_HOME="${_parameters.linux.javaDirectory}"`,
];
const parameters = () => _parameters;

module.exports = {
  parameters,
};
