import React from 'react';
import { Text as RNText } from 'react-native';

import { TextProps } from './Text.types';

import TextStyles, { fontColorStyles, fontWeightStyles } from './Text.styles';

const Text: React.FC<TextProps> = (props) => {
  const {
    style: styleProp,
    variant = 'paragraph',
    color = 'black',
    fontWeight,
    ...rest
  } = props;

  return (
    <RNText
      style={[
        TextStyles[variant],
        fontColorStyles[color],
        fontWeight && fontWeightStyles[fontWeight],
        styleProp,
      ]}
      {...rest}
    />
  );
};

export default Text;
