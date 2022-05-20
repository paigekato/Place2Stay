import { Animated } from 'react-native';

export const fadeInAnimation = (
  animation: Animated.Value,
  duration: number,
) => {
  Animated.timing(animation, {
    toValue: 1,
    duration,
    useNativeDriver: true,
  }).start();
};

export const fadeOutAnimation = (
  animation: Animated.Value,
  duration: number,
  toValue = 0,
) => {
  Animated.timing(animation, {
    toValue: toValue,
    duration,
    useNativeDriver: true,
  }).start();
};
