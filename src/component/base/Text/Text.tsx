import React from 'react';

import { Text as RNText } from 'react-native';
import TextStyles from './Text.styles';
import { TextProps } from './Text.types';

const Text: React.FC<TextProps> = (props) => {
  const { style: styleProp, variant = 'paragraph', ...rest } = props;

  return <RNText style={[TextStyles[variant], styleProp]} {...rest} />;
};

export default Text;
