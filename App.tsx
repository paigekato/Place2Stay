import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

import ModalStack from '/component/navigator/ModalStack';

const App = () => {
  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: { ...DefaultTheme.colors, background: 'white ' },
      }}
      linking={{
        prefixes: ['places2stay://'],
        config: {
          screens: {
            Home: 'home',
            Search: 'search',
            BottomTabs: {
              screens: {
                Trips: 'trips',
              },
            },
          },
        },
      }}
    >
      <ModalStack />
    </NavigationContainer>
  );
};

export default App;
