import { StyleProp, ViewStyle } from 'react-native';

import { IconName } from '/component/base/Icon/Icon';

export interface IconButtonProps {
  onPress: () => void;
  icon?: IconName;
  size?: string;
  isDisabled?: boolean;
  style?: StyleProp<ViewStyle>;
}
