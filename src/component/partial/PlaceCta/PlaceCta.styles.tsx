import { StyleSheet } from 'react-native';

import { colors } from '/theme/colors';

export default StyleSheet.create({
  container: {
    marginBottom: 34,
  },
  imageWrapper: {
    height: 200,
  },
  image: {
    borderRadius: 12,
    width: '100%',
    height: '100%',
  },
  title: {
    marginTop: 8,
  },
  eyebrow: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: colors.highlightColor,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderBottomLeftRadius: 8,
  },
});
