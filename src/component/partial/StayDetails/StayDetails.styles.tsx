import { StyleSheet } from 'react-native';

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
    color: '#5865F2',
  },
  attributeWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  attributeSpacing: {
    paddingBottom: 12,
  },
  typeWrapper: {
    backgroundColor: '#5865F2',
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
