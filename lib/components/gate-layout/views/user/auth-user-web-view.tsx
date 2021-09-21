import React from 'react';
import { AuthUserView, AuthUserViewProps } from '@app/client/components/gate-layout/views/user/auth-user-view';
import { ViewData } from '@sotaoi/client/components';
// import { AuthUserForm } from '@app/mobile/lib/components/gate-layout/forms/user/auth-user-form';
import { View, Text } from 'react-native';

class AuthUserMobileView extends AuthUserView {
  public mobile(data: ViewData<AuthUserViewProps>): null | React.ReactElement {
    return (
      <View style={{ flex: 1 }}>
        <Text>-- Auth User Form --</Text>
      </View>
    );
    // return <AuthUserForm {...this.init(data)} />;
  }
}

export { AuthUserMobileView };
