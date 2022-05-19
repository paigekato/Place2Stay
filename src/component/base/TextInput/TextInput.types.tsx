import { StyleProp, TextInputProps, ViewStyle } from 'react-native';

export interface SearchButtonProps extends TextInputProps {
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}
