import { ImageSourcePropType } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { HomeStackScreens } from '/component/navigator/HomeStack/Home.types';

export type PlaceProps = NativeStackScreenProps<HomeStackScreens, 'Stay'>;

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
