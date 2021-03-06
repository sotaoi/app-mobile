import React from 'react';
import { AuthForm } from '@sotaoi/client/forms/form-classes/auth-form';
import { BaseField } from '@sotaoi/client/forms';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { View, Text, TextInput } from 'react-native';
import { Spacer } from '@app/mobile/lib/components/generic/utility';

interface FieldState {
  [key: string]: BaseField<any>;
}
const AuthUserForm = (props: { form: AuthForm }): null | React.ReactElement => {
  const Form = props.form;
  const fields = Form.getFields<FieldState>();

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
          <fields.email.component keyboardType={'email-address'} placeholder={'email'} />
          <Spacer />

          {fields.password.wasTouched() &&
            fields.password.getErrors().map((error: any, index: any) => (
              <View style={{ marginBottom: 10 }}>
                <Text style={{ color: '#ff3333' }}>{error}</Text>
              </View>
            ))}
          <fields.password.component secureTextEntry={true} placeholder={'password'} />
          <Spacer />

          {fields.rememberMe.wasTouched() &&
            fields.rememberMe.getErrors().map((error: any, index: any) => (
              <View style={{ marginBottom: 10 }}>
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
