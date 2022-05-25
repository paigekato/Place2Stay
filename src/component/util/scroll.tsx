import { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';

export const handleScrollYOffset = (
  e: NativeSyntheticEvent<NativeScrollEvent>,
  offset = 0,
) => {
  const offScrollY = e.nativeEvent.contentOffset.y;

  if (offScrollY > offset) {
    return true;
  } else {
    return false;
  }
};
