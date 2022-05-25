import { ImageSourcePropType, StyleProp, ViewStyle } from 'react-native';

export interface PlaceBaseProps {
  location: string;
  rating: string;
  host: string;
  description: string;
  price: number;
  beds: number;
  bath: number;
  image: ImageSourcePropType;
}

export interface PlaceCtaProps {
  place: PlaceBaseProps;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
}
