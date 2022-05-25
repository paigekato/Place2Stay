import { StyleProp, TextProps as RNTextProps, TextStyle } from 'react-native';

export interface TextProps extends RNTextProps {
  style?: StyleProp<TextStyle>;
  variant?:
    | 'heading1'
    | 'heading2'
    | 'heading3'
    | 'paragraph'
    | 'label'
    | 'hint';
  color?: 'grey' | 'white';
  fontWeight?: '400' | '600' | '800';
}
