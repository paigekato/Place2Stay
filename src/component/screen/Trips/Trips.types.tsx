import { ImageSourcePropType } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { TripsStackScreens } from '/component/navigator/TripsStack/TripsStack.types';

export type TripsProps = NativeStackScreenProps<TripsStackScreens, 'TripsHome'>;

export interface StayDetailsProps {
  itemLabel: string;
  itemDetail: string;
}

export interface Stay {
  title: string;
  image: ImageSourcePropType;
  imageLabel: string;
  location: string;
  details: {
    title: string;
    items: StayDetailsProps[];
  }[];
}
