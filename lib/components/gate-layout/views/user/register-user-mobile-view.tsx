import React from 'react';
import { ViewData } from '@sotaoi/client/components';
// import { RegisterUserForm } from '@app/mobile/lib/components/gate-layout/forms/user/register-user-form';
import {
  RegisterUserFormProps,
  RegisterUserView,
} from '@app/client/components/gate-layout/views/user/register-user-view';
import { View, Text } from 'react-native';

class RegisterUserMobileView extends RegisterUserView {
  public mobile(data: ViewData<RegisterUserFormProps>): null | React.ReactElement {
    return (
      <View style={{ flex: 1 }}>
        <Text>-- Register User Form --</Text>
      </View>
    );
    // const { form } = this.init(data);
    // return <RegisterUserForm form={form} />;
  }
}

export { RegisterUserMobileView };
