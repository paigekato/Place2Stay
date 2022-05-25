import { StyleSheet } from 'react-native';

import { colors } from '/theme/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  location: {
    marginTop: 8,
    marginBottom: 4,
  },
  imageWrapper: {
    height: 300,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  contentWrapper: {
    padding: 24,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  host: {
    marginTop: 4,
  },
  attributes: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  divider: {
    borderBottomWidth: 1,
    borderColor: colors.highlightColorLight,
    marginBottom: 24,
    paddingBottom: 24,
  },
  dates: {
    textDecorationLine: 'underline',
    marginTop: 2,
  },
  reserveWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopColor: 'lightgrey',
    borderTopWidth: StyleSheet.hairlineWidth,
    paddingVertical: 12,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
