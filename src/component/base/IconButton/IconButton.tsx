import React from 'react';
import { Pressable } from 'react-native';

import Icon from '/component/base/Icon';

import { IconButtonProps } from './IconButton.types';

import styles from './IconButton.styles';

const IconButton: React.FC<IconButtonProps> = ({
  onPress,
  icon = 'caret',
  style: styleProps,
}) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, styleProps]}>
      <Icon name={icon} size="24px" />
    </Pressable>
  );
};

export default IconButton;
