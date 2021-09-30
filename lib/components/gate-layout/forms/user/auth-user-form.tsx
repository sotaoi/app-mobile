import React from 'react';
import { AuthForm } from '@sotaoi/client/forms/form-classes/auth-form';
import { BaseField } from '@sotaoi/client/forms';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { View, Text, TextInput } from 'react-native';
import { Spacer } from '@app/mobile/lib/components/generic/utility';
import { GenericErrorComponent } from '@sotaoi/client/components';

interface FieldState {
  [key: string]: BaseField<any>;
}
const AuthUserForm = (props: { form: AuthForm }): null | React.ReactElement => {
  const Form = props.form;
  const fields = Form.getFields<FieldState>();

  return <GenericErrorComponent />;

  return (
    <View style={{ margin: 20 }}>
      <Form.FormComponent>
        <View>
          <View style={{ margin: 25 }}>
            <Text style={{ fontSize: 20 }}>LOGIN</Text>
          </View>

          {fields.email.wasTouched() &&
            fields.email.getErrors().map((error: any, index: any) => (
              <View>
                <Text style={{ color: '#ff3333' }}>{error}</Text>
              </View>
            ))}
          <fields.email.component
            className={'w-full p-2 mb-6 text-black border-b-2 border-green-500 outline-none focus:bg-gray-300'}
            placeholder={'email'}
          />
          <Spacer />

          {fields.password.wasTouched() &&
            fields.password.getErrors().map((error: any, index: any) => (
              <View key={index} style={{ marginBottom: 10 }}>
                <Text style={{ color: '#ff3333' }}>{error}</Text>
              </View>
            ))}
          <fields.password.component
            autoComplete={'off'}
            type={'password'}
            placeholder={'password'}
            className={'w-full p-2 mb-6 text-black border-b-2 border-green-500 outline-none focus:bg-gray-300'}
          />
          <Spacer />

          {fields.rememberMe.wasTouched() &&
            fields.rememberMe.getErrors().map((error: any, index: any) => (
              <View key={index} style={{ marginBottom: 10 }}>
                <Text style={{ color: '#ff3333' }}>{error}</Text>
              </View>
            ))}
          <fields.rememberMe.component
            render={(value: boolean, setValue: (value: boolean) => void) => {
              return (
                <View>
                  <TextInput
                    style={{ margin: 10 }}
                    onChange={(ev: any) => {
                      setValue(ev.target.checked);
                    }}
                    // checked={value}
                    // type={'checkbox'}
                    value={''}
                  />
                  <Text>Remember me</Text>
                </View>
              );
            }}
          />
          <Spacer />

          <TouchableWithoutFeedback
            disabled={!Form.getFormState().canSubmit}
            onPress={(): void => {
              Form.submit();
            }}
          >
            <Text>Login</Text>
          </TouchableWithoutFeedback>
        </View>
      </Form.FormComponent>
    </View>
  );
};

export { AuthUserForm };
