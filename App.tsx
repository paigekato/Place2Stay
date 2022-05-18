import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTabs from '/component/navigator/BottomTabs';
import ModalStack from '/component/navigator/ModalStack';

const { Navigator, Screen } = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
};

export default App;
