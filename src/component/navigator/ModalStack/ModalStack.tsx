import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTabs from '/component/navigator/BottomTabs';
import SearchStack from '/component/navigator/SearchStack';

import { ModalStackScreens } from './ModalStack.types';

const { Navigator, Screen } = createNativeStackNavigator<ModalStackScreens>();

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
        component={SearchStack}
        options={() => ({
          headerShown: false,
          presentation: 'transparentModal',
        })}
      />
    </Navigator>
  );
};

export default ModalStack;
