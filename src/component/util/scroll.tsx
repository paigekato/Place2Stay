import { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';

export const handleScrollYOffset = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
  const offScrollY = e.nativeEvent.contentOffset.y;

  if (offScrollY > 0) {
    return true;
  } else {
    return false;
  }
};
