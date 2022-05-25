import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from '/component/base/Icon';
import Text from '/component/base/Text';
import HomeStack from '/component/navigator/HomeStack';
import { Color, colors } from '/theme/colors';

import TripsStack from '../TripsStack';

const Tab = createBottomTabNavigator();

const BottomTabs: React.FC = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Explore"
        component={HomeStack}
        options={{
          tabBarLabel: ({ focused }) => {
            const styles = {
              color: focused ? colors.highlightColor : colors.textPrimary,
            };
            return (
              <Text variant="label" style={styles}>
                Explore
              </Text>
            );
          },
          tabBarIcon: ({ focused }) => {
            const iconColor = focused
              ? colors.highlightColor
              : colors.textPrimary;
            return (
              <Icon name="search" size="24px" color={iconColor as Color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Trips"
        component={TripsStack}
        options={{
          tabBarLabel: ({ focused }) => {
            const styles = {
              color: focused ? colors.highlightColor : colors.textPrimary,
            };
            return (
              <Text variant="label" style={styles}>
                Trips
              </Text>
            );
          },
          tabBarIcon: ({ focused }) => {
            const iconColor = focused
              ? colors.highlightColor
              : colors.textPrimary;
            return <Icon name="house" size="24px" color={iconColor as Color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
