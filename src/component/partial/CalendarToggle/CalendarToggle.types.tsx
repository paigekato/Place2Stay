import { StyleProp, ViewStyle } from 'react-native';

export interface SearchButtonProps {
  onPress: (value: string) => void;
  style?: StyleProp<ViewStyle>;
}

export interface ButtonProps {
  value: string;
  title: string;
}
