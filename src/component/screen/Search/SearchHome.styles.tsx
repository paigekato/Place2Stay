import { StyleSheet } from 'react-native';

import SearchButtonStyles from '/component/partial/SearchButton/SearchButton.styles';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    height: '100%',
  },
  wrapper: {
    backgroundColor: 'white',
    flex: 1,
    ...StyleSheet.absoluteFillObject,
  },
  text: {
    opacity: 1,
  },
  search: {
    // import base search button styles and animate height
    ...SearchButtonStyles.container,
    marginTop: 8,
    padding: 24,
    paddingBottom: 0,
    alignItems: 'flex-start',
  },
  searchForm: {
    marginTop: 20,
    marginRight: 24,
  },
});
