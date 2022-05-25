import React from 'react';
import { Animated, Pressable } from 'react-native';

import Text from '/component/base/Text';

import { IconButtonProps } from './Button.types';

import styles from './Button.styles';

const Button: React.FC<IconButtonProps> = ({
  title,
  onPress,
  align = 'center',
  isDisabled = false,
  style: styleProps,
}) => {
  const opacity = React.useRef(new Animated.Value(0)).current;

  const animatePress = (direction = 'in') => {
    const animateIn = direction === 'in';

    Animated.timing(opacity, {
      toValue: animateIn ? 1 : 0,
      duration: 150,
      useNativeDriver: true,
    }).start();
  };

  const opacityFadeIn = opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.6],
  });

  return (
    <Animated.View style={{ opacity: opacityFadeIn }}>
      <Pressable
        disabled={isDisabled}
        onPress={onPress}
        onPressIn={() => animatePress('in')}
        onPressOut={() => animatePress('out')}
        style={[styles.container, styles[align], styleProps]}
      >
        <Text fontWeight="600" style={styles.text}>
          {title}
        </Text>
      </Pressable>
    </Animated.View>
  );
};

export default Button;
