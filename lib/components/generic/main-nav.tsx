// import type { DefaultNamespace, UseTranslationResponse } from '@sotaoi/client/services/lang-service';
import React from 'react';
// import { Link } from '@sotaoi/client/router';
// import { lang } from '@sotaoi/client/lang';
import { Action } from '@sotaoi/client/action';
import { AuthRecord } from '@sotaoi/omni/artifacts';
import { View, Text } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

class MainNavProps {
  public authRecord: null | AuthRecord;
  constructor(authRecord: null | AuthRecord) {
    this.authRecord = authRecord;
  }
}
const MainNav = (props: MainNavProps): null | React.ReactElement => {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <View style={{ margin: 10 }}>
        <Text style={{ fontSize: 16 }}>-- Main Nav --</Text>
      </View>
      <View style={{ margin: 10 }}>
        <TouchableWithoutFeedback
          onPress={() => {
            Action.deauth();
          }}
        >
          <Text style={{ color: '#ee0000', fontSize: 16 }}>Logout</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
  // const { t } = lang().useTranslation<UseTranslationResponse<DefaultNamespace>>();
  // return (
  //   <nav className={'flex pl-4 flex-row row w-full items-center text-white bg-black shadow'}>
  //     <div className={'flex-grow'} style={{}}>
  //       <Link to={'/'}>
  //         <h1 className={'m-2 p-2 inline-block text-white rounded text-2xl'}>{t('app.general.welcome')}</h1>
  //       </Link>
  //       <Link to={'/todo'}>
  //         <button className={'m-2 p-2 text-white rounded'}>My Alarms</button>
  //       </Link>
  //       <Link to={'/user/list/all'}>
  //         <button className={'m-2 p-2 text-white rounded'}>Users</button>
  //       </Link>
  //       {props.authRecord && (
  //         <Link to={`/${props.authRecord.repository}/view/${props.authRecord.uuid}`}>
  //           <button className={'m-2 p-2 text-white rounded'}>My Profile</button>
  //         </Link>
  //       )}
  //     </div>
  //     <div>
  //       <Link to={'/gate/auth/user'}>
  //         <button
  //           onClick={async (): Promise<void> => {
  //             await Action.deauth();
  //           }}
  //           className={'m-2 p-2 text-white rounded'}
  //         >
  //           Logout
  //         </button>
  //       </Link>
  //     </div>
  //   </nav>
  // );
};

export { MainNav, MainNavProps };
