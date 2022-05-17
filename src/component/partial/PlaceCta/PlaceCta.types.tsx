import { ImageSourcePropType, StyleProp, ViewStyle } from 'react-native';

export interface PlaceCtaProps {
  image: ImageSourcePropType;
  title: string;
  location: string;
  eyebrow?: string;
  style?: StyleProp<ViewStyle>;
}
