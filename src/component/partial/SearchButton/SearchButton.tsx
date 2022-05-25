import React from 'react';
import { Animated, Pressable } from 'react-native';

import Icon from '/component/base/Icon';
import Text from '/component/base/Text';

import { SearchButtonProps } from './SearchButton.types';

import styles from './SearchButton.styles';

const SearchButton: React.FC<SearchButtonProps> = ({
  onPress,
  subtitle = 'Location - Add guests',
  style: styleProps,
}) => {
  const opacityAnimation = React.useRef(new Animated.Value(1)).current;

  const fadeOut = () =>
    Animated.timing(opacityAnimation, {
      toValue: 0.2,
      duration: 100,
      useNativeDriver: true,
    }).start();

  const fadeIn = () =>
    Animated.timing(opacityAnimation, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();

  const opacity = opacityAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, styleProps]}
      onPressIn={onPress && fadeOut}
      onPressOut={onPress && fadeIn}
    >
      <Icon name="search" size="24px" />
      <Animated.View style={[styles.textWrapper, { opacity }]}>
        <Text style={styles.placeholder}>Where to?</Text>
        <Text color="grey" numberOfLines={1}>
          {subtitle}
        </Text>
      </Animated.View>
    </Pressable>
  );
};

export default SearchButton;
