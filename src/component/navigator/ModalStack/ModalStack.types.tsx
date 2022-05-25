import { NavigatorScreenParams } from '@react-navigation/native';

import { BottomTabsScreens } from '/component/navigator/BottomTabs/BottomTabs.types';
import { SearchStackScreens } from '/component/navigator/SearchStack/SearchStack.types';

export type ModalStackScreens = {
  Search: NavigatorScreenParams<SearchStackScreens> | undefined;
  BottomTabs: NavigatorScreenParams<BottomTabsScreens> | undefined;
};

export type ModalStackNavigationProp<T extends ModalStackScreens> = {
  [K in keyof T]: { screen: K; params?: T[K] };
}[keyof T];
