import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import IconButton from '/component/base/IconButton';
import Home from '/component/screen/Home';
import Place from '/component/screen/Home/Place';

const { Navigator, Screen } = createNativeStackNavigator();

const HomeStack: React.FC = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen
        name="Place"
        component={Place}
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
