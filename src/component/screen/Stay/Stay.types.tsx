import { ImageSourcePropType } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackScreens } from 'component/navigator/HomeStack/Home.types';

export type StayProps = NativeStackScreenProps<HomeStackScreens, 'Stay'>;

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
