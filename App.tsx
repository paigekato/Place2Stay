import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import CardStack from '/component/navigator/CardStack';

const App = () => {
  return (
    <NavigationContainer>
      <CardStack />
    </NavigationContainer>
  );
};

export default App;
