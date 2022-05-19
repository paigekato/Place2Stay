import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackScreens } from 'component/navigator/HomeStack/Home.types';
import { ModalStackScreens } from 'component/navigator/ModalStack/ModalStack.types';

export type HomeProps =
  | NativeStackScreenProps<HomeStackScreens, 'HomeHome'>
  | NativeStackScreenProps<ModalStackScreens, 'Search'>;
