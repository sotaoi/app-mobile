import React from 'react';
// import { Link, LayoutProps } from '@sotaoi/client/router';
import { LayoutProps } from '@sotaoi/client/router';
import { SafeAreaView, View, Text } from 'react-native';

const GateLayout = (props: LayoutProps): React.ReactElement => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* <nav className={'flex pl-4 flex-row w-full items-center text-white bg-black shadow'}>
        <Link to={'/'}>
          <h1 className={'m-2 p-2 text-white rounded text-2xl'}>Alarmion</h1>
        </Link>
        <Link to={'/gate/register/user'}>
          <button className={'m-2 p-2 text-white rounded bg-blue-700'}>Sign up</button>
        </Link>
        <Link to={'/gate/auth/user'}>
          <button className={'m-2 p-2 text-white rounded'}>Login</button>
        </Link>
      </nav> */}
      <View style={{ margin: 15 }}>
        <Text>Gate Layout</Text>
      </View>
      <View style={{ flex: 1 }}>{props.children}</View>
    </SafeAreaView>
  );
};

export { GateLayout };
