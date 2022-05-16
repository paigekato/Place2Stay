import React from 'react';
import { Text as RNText } from 'react-native';

import { TextProps } from './Text.types';

import TextStyles, { fontColorStyles } from './Text.styles';

const Text: React.FC<TextProps> = (props) => {
  const {
    style: styleProp,
    variant = 'paragraph',
    color = 'black',
    ...rest
  } = props;

  return (
    <RNText
      style={[TextStyles[variant], fontColorStyles[color], styleProp]}
      {...rest}
    />
  );
};

export default Text;
