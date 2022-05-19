import { NavigatorScreenParams } from '@react-navigation/native';

import { BottomTabsScreens } from '/component/navigator/BottomTabs/BottomTabs.types';
import { ModalStackScreens } from '/component/navigator/ModalStack/ModalStack.types';

export type CardStackScreens = {
  BottomTabs: NavigatorScreenParams<BottomTabsScreens>;
  ModalStack: NavigatorScreenParams<ModalStackScreens>;
};
