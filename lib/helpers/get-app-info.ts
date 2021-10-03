import { getAppInfo as _getAppInfo, getAppDomain as _getAppDomain } from '@sotaoi/omni/get-app-info';
import { AppInfo } from '@sotaoi/omni/state';
import { Config } from '@sotaoi/config';

const getAppInfo = (flag: null): AppInfo => {
  return _getAppInfo({ dumpEnvVars: () => Config.dumpEnvVars() });
};

const getAppDomain = (flag: null): string => {
  return _getAppDomain({ dumpEnvVars: () => Config.dumpEnvVars() });
};

export { getAppInfo, getAppDomain };
