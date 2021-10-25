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
import { GateLayout } from '@app/mobile/lib/components/gate-layout/gate-layout';
import { MainLayout } from '@app/mobile/lib/components/main-layout/main-layout';
import { HomeMobileView } from '@app/mobile/lib/components/home-mobile-view';
import { AuthUserMobileView } from '@app/mobile/lib/components/gate-layout/views/user/auth-user-mobile-view';
import { RegisterUserMobileView } from '@app/mobile/lib/components/gate-layout/views/user/register-user-mobile-view';
import { SvgCssUri } from 'react-native-svg';
import envJson from '@app/mobile/env.json';
import { Platform, View, Text } from 'react-native';
import { store } from '@sotaoi/client/store';

let appKernel: AppKernel;

const App = (): any => {
  const appInfo = getAppInfo();
  let domain = getAppDomain();
  appKernel = typeof appKernel === 'undefined' ? new AppKernel() : appKernel;

  if (__DEV__ && Platform.OS === 'android') {
    envJson?.internalIps?.length && (domain = envJson.internalIps[0]);
  }

  const [state, setState] = React.useState({
    flag: 'loading',
    error: null,
  });

  const routerComponentFn = () => (
    <Router
      {...(routes(
        [HomeMobileView, AuthUserMobileView, RegisterUserMobileView],
        {
          'app.layouts.gate': GateLayout,
          'app.layouts.main': MainLayout,
        },
        {
          webComponent: () => null,
          mobileComponent: MobileComponent,
          electronComponent: () => null,
          routerFlux: RouterFlux,
          reactRedux: ReactRedux,
        },
      ) as any)}
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
      { asyncStorage: AsyncStorage, svgCssUri: SvgCssUri },
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
      return (
        <PaperProvider>
          <Loading />
        </PaperProvider>
      );
    case state.flag === 'started':
      if (!!store().getState()['app.coreState.maintenance']) {
        return (
          <PaperProvider>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text>Service is currently unavailable, we are currently undergoing maintenance operations</Text>
            </View>
          </PaperProvider>
        );
      }
      return <PaperProvider>{routerComponentFn()}</PaperProvider>;
    case state.flag === 'failed':
      return (
        <PaperProvider>
          <ErrorComponent error={state.error ? state.error : new Error('something went wrong')} />
        </PaperProvider>
      );
    default:
      throw new Error('unknown mobile init flag');
  }
};

export { App };
