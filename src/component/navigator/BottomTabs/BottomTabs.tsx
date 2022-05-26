import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStack from '/component/navigator/HomeStack';
import Settings from '/component/screen/Settings';

import { tabBarIcon, tabBarLabel } from '../navigatorOptions';
import TripsStack from '../TripsStack';

const Tab = createBottomTabNavigator();

const BottomTabs: React.FC = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Explore"
        component={HomeStack}
        options={{
          tabBarLabel: ({ focused }) => tabBarLabel(focused, 'Explore'),
          tabBarIcon: ({ focused }) => tabBarIcon(focused, 'search'),
        }}
      />
      <Tab.Screen
        name="Trips"
        component={TripsStack}
        options={{
          tabBarLabel: ({ focused }) => tabBarLabel(focused, 'Trips'),
          tabBarIcon: ({ focused }) => tabBarIcon(focused, 'house'),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: ({ focused }) => tabBarLabel(focused, 'Settings'),
          tabBarIcon: ({ focused }) => tabBarIcon(focused, 'user'),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
