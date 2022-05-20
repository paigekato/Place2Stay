import React from 'react';
import Svg from 'react-native-svg';

import { Color, colors } from '/theme/colors';

import component from './Icon.component';

export type IconName = keyof typeof component;

interface IconProps {
  name: IconName;
  size?: string;
  color?: Color;
}

interface SvgProps {
  size?: string;
}

const CaretIcon: React.FC<IconProps> = ({
  name = 'caret',
  size = '36px',
  color = colors.highlightColor,
}) => {
  const Component = component[name] as React.FC<SvgProps>;

  return (
    <Svg height={size} viewBox="0 0 24 24" width={size} fill={color}>
      <Component size={size} />
    </Svg>
  );
};

export default CaretIcon;
