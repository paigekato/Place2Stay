import { StyleSheet } from 'react-native';

import { colors } from '/theme/colors';

export default StyleSheet.create({
  container: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#E1DFD8',
    borderRadius: 8,
    backgroundColor: 'white',
    overflow: 'hidden',
    padding: 16,
    paddingTop: 44,
  },
  menu: {
    position: 'absolute',
    right: 16,
    top: 2,
  },
  menuDots: {
    color: colors.highlightColor,
  },
  attributeWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  attributeSpacing: {
    paddingBottom: 12,
  },
  typeWrapper: {
    backgroundColor: colors.highlightColor,
    position: 'absolute',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomRightRadius: 8,
  },
  type: {
    color: 'white',
  },
  itemLabel: {
    textTransform: 'capitalize',
  },
});
