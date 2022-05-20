import React from 'react';
import { Animated, Pressable, View } from 'react-native';

import Text from '/component/base/Text';

import { ButtonProps, SearchButtonProps } from './CalendarToggle.types';

import styles from './CalendarToggle.styles';

const CalendarToggle: React.FC<SearchButtonProps> = ({
  onPress,
  style: styleProps,
}) => {
  const slideAnimation = React.useRef(new Animated.Value(1)).current;

  const [viewWidth, setViewWidth] = React.useState(0);

  const handleButtonPress = (value: string) => {
    // Pass value back up
    if (value) {
      onPress(value);
    }

    // Animate
    Animated.spring(slideAnimation, {
      toValue: value === 'flexible' ? viewWidth : 0,
      useNativeDriver: false,
    }).start();
  };

  function Button({ value, title }: ButtonProps) {
    return (
      <Pressable
        onPress={() => handleButtonPress(value)}
        style={styles.textWrapper}
      >
        <Text>{title}</Text>
      </Pressable>
    );
  }

  return (
    <View style={[styles.container, styleProps]}>
      {/* Sliding highlight */}
      <Animated.View
        style={[
          styles.highlight,
          { transform: [{ translateX: slideAnimation }] },
        ]}
        onLayout={(e) => {
          setViewWidth(e.nativeEvent.layout.width);
        }}
      />

      <Button value="dates" title="Choose Dates" />
      <Button value="flexible" title="I'm flexible" />
    </View>
  );
};

export default CalendarToggle;
