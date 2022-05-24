import { ImageSourcePropType, StyleProp, ViewStyle } from 'react-native';

export interface StayLocationProps {
  image: ImageSourcePropType;
  title: string;
  host: string;
  location: string;
}

export interface StayMiniProps {
  stay: StayLocationProps;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
}
