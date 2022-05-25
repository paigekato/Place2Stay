import { StyleProp, ViewStyle } from 'react-native';

export interface SearchButtonProps {
  onPress?: () => void;
  subtitle?: string;
  style?: StyleProp<ViewStyle>;
}
