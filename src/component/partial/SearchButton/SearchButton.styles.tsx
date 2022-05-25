import { StyleSheet } from 'react-native';

import { boxes } from '/theme/boxes';

export default StyleSheet.create({
  container: {
    ...boxes.base,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 20,
    height: 52,
    paddingRight: 40,
  },
  placeholder: {
    fontWeight: '600',
  },
  textWrapper: {
    flexGrow: 1,
    marginLeft: 8,
  },
});
