import React from 'react';
import { LayoutProps } from '@sotaoi/client/router';
import { store } from '@sotaoi/client/store';
import { MainNav, MainNavProps } from '@app/mobile/lib/components/generic/main-nav';
import { SafeAreaView, View } from 'react-native';

const MainLayout = (props: LayoutProps): React.ReactElement => {
  const authRecord = store().getAuthRecord();
  // you could have class as component props
  const mainNavProps = new MainNavProps(authRecord);

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <MainNav {...mainNavProps} />
      <View style={{ flex: 1 }}>{props.children}</View>
    </SafeAreaView>
  );
};

export { MainLayout };
