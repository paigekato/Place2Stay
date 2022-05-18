import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IconButton from 'component/base/IconButton';

import Search from '/component/screen/Search';

const { Navigator, Screen } = createNativeStackNavigator();

const ModalStack: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShadowVisible: false,
      }}
    >
      <Screen
        name="Search"
        component={Search}
        options={({ navigation }) => ({
          headerShown: true,
          // gestureEnabled: false,
          headerTransparent: true,
          title: '',
          headerLeft: () => (
            <IconButton icon="close" onPress={() => navigation.goBack()} />
          ),
        })}
      />
    </Navigator>
  );
};

export default ModalStack;
