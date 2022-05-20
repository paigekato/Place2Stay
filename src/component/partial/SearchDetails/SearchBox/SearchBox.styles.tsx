import { StyleSheet } from 'react-native';

import { boxes } from '/theme/boxes';

export const SEARCH_BOX_HEIGHT = 52;

export default StyleSheet.create({
  wrapper: {
    ...boxes.base,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    height: SEARCH_BOX_HEIGHT,
  },
});
