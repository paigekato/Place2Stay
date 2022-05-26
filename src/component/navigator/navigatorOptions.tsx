import React from 'react';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

import Icon from '/component/base/Icon';
import { IconName } from '/component/base/Icon/Icon';
import IconButton from '/component/base/IconButton';
import Text from '/component/base/Text';
import { Color, colors } from '/theme/colors';

export const tabBarLabel = (focused: boolean, title: string) => {
  const styles = {
    color: focused ? colors.highlightColor : colors.textPrimary,
  };
  return (
    <Text variant="label" style={styles}>
      {title}
    </Text>
  );
};

export const tabBarIcon = (focused: boolean, icon: IconName) => {
  const iconColor = focused ? colors.highlightColor : colors.textPrimary;
  return <Icon name={icon} size="24px" color={iconColor as Color} />;
};

export const searchStackOptions: NativeStackNavigationOptions = {
  headerShown: true,
  title: '',
  animation: 'default',
  presentation: 'card',
};

export const headerLeftNavOptions = (navigation: { goBack: () => void }) => (
  <IconButton
    onPress={() => navigation.goBack()}
    size="16px"
    // eslint-disable-next-line react-native/no-inline-styles
    style={{ marginLeft: 4, paddingTop: -24 }}
  />
);
