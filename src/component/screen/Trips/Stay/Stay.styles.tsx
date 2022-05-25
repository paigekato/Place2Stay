import { StyleSheet } from 'react-native';

import { colors } from '/theme/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundSecondary,
  },
  title: {
    marginBottom: 32,
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
  detail: {
    marginBottom: 32,
  },
});
