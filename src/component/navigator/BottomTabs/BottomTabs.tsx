import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'component/base/Icon';

import HomeStack from '/component/navigator/HomeStack';
import { Color, colors } from '/theme/colors';

const Tab = createBottomTabNavigator();

const BottomTabs: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            const iconColor = focused
              ? colors.highlightColor
              : colors.textPrimary;
            return <Icon name="location" color={iconColor as Color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
