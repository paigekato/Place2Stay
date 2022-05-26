import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { HomeStackScreens } from '/component/navigator/HomeStack/Home.types';
import { TripsStackScreens } from '/component/navigator/TripsStack/TripsStack.types';

export type BottomTabsScreens = {
  Explore: NativeStackScreenProps<HomeStackScreens> | undefined;
  Trips: NativeStackScreenProps<TripsStackScreens> | undefined;
  Settings: undefined;
};
