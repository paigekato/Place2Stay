import { StyleSheet } from 'react-native';

import { colors } from '/theme/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.highlightColorLight,
    padding: 6,
    borderRadius: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
  },
  textWrapper: {
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 14,
    width: '50%',
  },
  highlight: {
    position: 'absolute',
    marginHorizontal: 6,
    borderRadius: 100,
    height: '100%',
    width: '50%',
    backgroundColor: 'white',
  },
});
