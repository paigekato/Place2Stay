import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import IconButton from '/component/base/IconButton';
import Search from '/component/screen/Search';
import SearchDates from '/component/screen/Search/SearchDates';
import SearchGuests from '/component/screen/Search/SearchGuests';
import SearchResults from '/component/screen/Search/SearchResults';

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
          headerShown: true,
          title: '',
          animation: 'default',
          presentation: 'card',
          headerLeft: () => (
            <IconButton
              onPress={() => navigation.goBack()}
              size="16px"
              // eslint-disable-next-line react-native/no-inline-styles
              style={{ marginLeft: 4, paddingTop: -24 }}
            />
          ),
        })}
      />
      <Screen
        name="SearchGuests"
        component={SearchGuests}
        options={({ navigation }) => ({
          headerShown: true,
          title: '',
          animation: 'none',
          presentation: 'card',
          headerLeft: () => (
            <IconButton
              onPress={() => navigation.goBack()}
              size="16px"
              // eslint-disable-next-line react-native/no-inline-styles
              style={{ marginLeft: 4, paddingTop: -24 }}
            />
          ),
        })}
      />
      <Screen
        name="SearchResults"
        component={SearchResults}
        options={({ navigation }) => ({
          headerShown: true,
          title: '',
          animation: 'none',
          presentation: 'card',
          headerLeft: () => (
            <IconButton
              onPress={() => navigation.goBack()}
              size="16px"
              // eslint-disable-next-line react-native/no-inline-styles
              style={{ marginLeft: 4, paddingTop: -24 }}
            />
          ),
        })}
      />
    </Navigator>
  );
};

export default ModalStack;
