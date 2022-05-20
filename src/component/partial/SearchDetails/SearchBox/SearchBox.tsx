import React from 'react';
import { View } from 'react-native';

import Text from '/component/base/Text';

import { SearchBoxProps } from './SearchBox.types';

import styles from './SearchBox.styles';

const SearchBox: React.FC<SearchBoxProps> = ({
  attribute,
  value,
  style: styleProps,
}) => {
  return (
    <View style={[styles.wrapper, styleProps]}>
      <Text variant="label">{attribute}</Text>
      <Text variant="heading2">{value}</Text>
    </View>
  );
};

export default SearchBox;
