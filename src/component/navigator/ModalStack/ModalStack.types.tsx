import { NavigatorScreenParams } from '@react-navigation/native';

import { BottomTabsScreens } from '/component/navigator/BottomTabs/BottomTabs.types';

export type ModalStackScreens = {
  Search: undefined;
  BottomTabs: NavigatorScreenParams<BottomTabsScreens>;
};
