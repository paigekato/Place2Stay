import { StyleProp, ViewStyle } from 'react-native';

import { PlaceBaseProps } from '/component/screen/Home/Place/Place.types';

export interface PlaceCtaProps {
  place: PlaceBaseProps;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
}
