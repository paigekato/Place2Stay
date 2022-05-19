import React from 'react';
import { TextInput as RNTextInput, View } from 'react-native';

import Icon from '/component/base/Icon';
import { colors } from '/theme/colors';

import { SearchButtonProps } from './TextInput.types';

import styles from './TextInput.styles';

const TextInput: React.FC<SearchButtonProps> = ({
  style: styleProps,
  ...textProps
}) => {
  return (
    <View style={[styleProps, styles.container]}>
      <Icon name="search" size="18px" />
      <RNTextInput
        style={styles.input}
        placeholder="Search destinations"
        placeholderTextColor={colors.textSecondary}
        {...textProps}
      />
    </View>
  );
};

export default TextInput;
