import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

import ModalStack from '/component/navigator/ModalStack';

const App = () => {
  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: { ...DefaultTheme.colors, background: 'transparent ' },
      }}
    >
      <ModalStack />
    </NavigationContainer>
  );
};

export default App;
