import { StyleProp, ViewStyle } from 'react-native';

export interface SearchBoxProps {
  location: string;
  dates?: string;
  guests?: string;
  style?: StyleProp<ViewStyle>;
}
