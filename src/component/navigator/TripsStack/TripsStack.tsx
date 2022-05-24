import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IconButton from 'component/base/IconButton';

import Stay from '/component/screen/Stay';
import Trips from '/component/screen/Trips';

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
          headerLeft: () => <IconButton onPress={() => navigation.goBack()} />,
        })}
      />
    </Navigator>
  );
};

export default TripsStack;
