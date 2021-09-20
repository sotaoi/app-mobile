import React from 'react';
import { Router } from '@sotaoi/client/router';
import { Bootstrap } from '@sotaoi/client/bootstrap';
import { createStore } from 'redux';
import { Loading } from '@app/client/components/generic/loading';
import { ErrorComponent } from '@app/client/components/generic/error-component';
import { getAppInfo, getAppDomain } from '@sotaoi/omni/get-app-info';
import { AppKernel } from '@sotaoi/client/app-kernel';
import { routes } from '@app/client/routes';
import AsyncStorage from '@react-native-community/async-storage';
import { MobileComponent } from '@app/mobile/lib/mobile.component';
import * as RouterFlux from 'react-native-router-flux';
import * as ReactRedux from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import { storeEnvVars } from '@app/mobile/lib/global';

const appInfo = getAppInfo({ storeEnvVars });
const domain = getAppDomain({ storeEnvVars });
const appKernel = new AppKernel();

const App = (): any => {
  const [state, setState] = React.useState({
    flag: 'loading',
    error: null,
  });

  const routerComponentFn = () => (
    <Router
      {...routes(
        [],
        {},
        {
          webComponent: () => null,
          mobileComponent: MobileComponent,
          electronComponent: () => null,
          routerFlux: RouterFlux,
          reactRedux: ReactRedux,
        },
      )}
    />
  );

  React.useEffect(() => {
    Bootstrap.init(
      appInfo,
      `https://${domain}/api`,
      appKernel,
      routerComponentFn,
      createStore,
      Loading,
      ErrorComponent,
      true,
      AsyncStorage,
    )
      .then(() => {
        setState({ flag: 'started', error: null });
      })
      .catch((err) => {
        console.warn(err.name);
        console.warn(err.message);
        console.warn(err.stack);
        setState({ flag: 'failed', error: err });
      });
  }, []);

  switch (true) {
    case state.flag === 'loading':
      return null;
    // return <Loading />;
    case state.flag === 'started':
      return <PaperProvider>{routerComponentFn()}</PaperProvider>;
    case state.flag === 'failed':
      return <ErrorComponent error={state.error ? state.error : new Error('something went wrong')} />;
    default:
      throw new Error('unknown mobile init flag');
  }
};

export { App };
