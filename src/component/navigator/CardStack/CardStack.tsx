import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTabs from '../BottomTabs';
import ModalStack from '../ModalStack';

const { Navigator, Screen } = createNativeStackNavigator();

const CardStack: React.FC = () => {
  return (
    <Navigator>
      <Screen
        name="BottomTabs"
        component={BottomTabs}
        options={{ headerShown: false }}
      />
      <Screen
        name="ModalStack"
        component={ModalStack}
        options={{ headerShown: false, presentation: 'transparentModal' }}
      />
    </Navigator>
  );
};

export default CardStack;
