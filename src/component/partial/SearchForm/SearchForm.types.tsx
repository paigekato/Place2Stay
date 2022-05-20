import { StyleProp, ViewStyle } from 'react-native';

export interface SearchButtonProps {
  onPress: (city: string) => void;
  style?: StyleProp<ViewStyle>;
}
