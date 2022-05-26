import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Search from '/component/screen/Search';
import SearchDates from '/component/screen/Search/SearchDates';
import SearchGuests from '/component/screen/Search/SearchGuests';
import SearchResults from '/component/screen/Search/SearchResults';

import { headerLeftNavOptions, searchStackOptions } from '../navigatorOptions';

const { Navigator, Screen } = createNativeStackNavigator();

// TODO Clean up options
const ModalStack: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShadowVisible: false,
        animation: 'none',
      }}
    >
      <Screen
        name="SearchHome"
        component={Search}
        options={() => ({
          headerShown: false,
          presentation: 'transparentModal',
          headerLeftContainerStyle: {
            paddingLeft: 0,
          },
        })}
      />
      <Screen
        name="SearchDates"
        component={SearchDates}
        options={({ navigation }) => ({
          ...searchStackOptions,
          headerLeft: () => headerLeftNavOptions(navigation),
        })}
      />
      <Screen
        name="SearchGuests"
        component={SearchGuests}
        options={({ navigation }) => ({
          ...searchStackOptions,
          headerLeft: () => headerLeftNavOptions(navigation),
        })}
      />
      <Screen
        name="SearchResults"
        component={SearchResults}
        options={({ navigation }) => ({
          ...searchStackOptions,
          headerLeft: () => headerLeftNavOptions(navigation),
        })}
      />
    </Navigator>
  );
};

export default ModalStack;
