import { StyleSheet } from 'react-native';
import { colors } from 'theme/colors';

export default StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingBottom: 30,
  },
  wrapper: {
    marginHorizontal: 24,
  },
  searchButton: {
    marginHorizontal: 24,
    marginBottom: 32,
  },
  footerWrapper: {
    marginBottom: 32,
  },
  cityWrapper: {
    marginLeft: 24,
  },
  cityHeader: {
    marginBottom: 16,
    marginLeft: 24,
  },
  lastImage: {
    marginRight: 24,
  },
  footerImage: {
    height: 160,
    width: 120,
    marginBottom: 8,
  },
  searchBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingTop: 87,
    paddingBottom: 0,
    backgroundColor: 'white',
    borderBottomColor: colors.highlightColor,
    borderBottomWidth: 1,
  },
});
