import { StyleProp, TextStyle } from 'react-native';

export interface TextProps {
  style?: StyleProp<TextStyle>;
  variant?:
    | 'heading1'
    | 'heading2'
    | 'heading3'
    | 'paragraph'
    | 'label'
    | 'hint';
  color?: 'grey' | 'white';
}
