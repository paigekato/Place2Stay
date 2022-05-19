import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTabs from '/component/navigator/BottomTabs';
import Search from '/component/screen/Search';

const { Navigator, Screen } = createNativeStackNavigator();

const ModalStack: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShadowVisible: false,
        animation: 'none',
      }}
    >
      <Screen
        name="BottomTabs"
        component={BottomTabs}
        options={{ headerShown: false }}
      />
      <Screen
        name="Search"
        component={Search}
        options={() => ({
          headerShown: false,
          presentation: 'transparentModal',
        })}
      />
    </Navigator>
  );
};

export default ModalStack;
