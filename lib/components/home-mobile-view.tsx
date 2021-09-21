import React from 'react';
import { HomeView } from '@app/client/components/home-view';
import { View, Text } from 'react-native';

class HomeMobileView extends HomeView {
  public mobile(): null | React.ReactElement {
    return (
      <View style={{ flex: 1 }}>
        <Text>Speed, strength, responsibility</Text>
      </View>
    );
  }
}

export { HomeMobileView };
