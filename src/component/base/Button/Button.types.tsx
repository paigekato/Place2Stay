import { StyleProp, ViewStyle } from 'react-native';

export interface IconButtonProps {
  title: string;
  onPress: () => void;
  isDisabled?: boolean;
  align?: 'center' | 'left' | 'right';
  style?: StyleProp<ViewStyle>;
}
