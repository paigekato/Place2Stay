import React from 'react';

import { Text as RNText } from 'react-native';
import { TextProps } from './Text.types';

const Text: React.FC<TextProps> = ({ children }) => {
  return <RNText>{children}</RNText>;
};

export default Text;
