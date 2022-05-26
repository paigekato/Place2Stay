import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Trips from '/component/screen/Trips';
import Stay from '/component/screen/Trips/Stay';

import { headerLeftNavOptions } from '../navigatorOptions';

const { Navigator, Screen } = createNativeStackNavigator();

const TripsStack: React.FC = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="TripsHome" component={Trips} />
      <Screen
        name="Stay"
        component={Stay}
        options={({ navigation }) => ({
          headerShown: true,
          headerTransparent: false,
          title: '',
          headerLeft: () => headerLeftNavOptions(navigation),
        })}
      />
    </Navigator>
  );
};

export default TripsStack;
