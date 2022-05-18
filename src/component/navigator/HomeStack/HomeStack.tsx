import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IconButton from 'component/base/IconButton';

import Home from '/component/screen/Home';
import Stay from '/component/screen/Stay';

const { Navigator, Screen } = createNativeStackNavigator();

const HomeStack: React.FC = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="HomeHome" component={Home} />
      <Screen
        name="Stay"
        component={Stay}
        options={({ navigation }) => ({
          headerShown: true,
          headerTransparent: false,
          title: '',
          headerLeft: () => <IconButton onPress={() => navigation.goBack()} />,
        })}
      />
    </Navigator>
  );
};

export default HomeStack;
