import { StyleSheet } from 'react-native';

import SearchButtonStyles from '/component/partial/SearchButton/SearchButton.styles';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    height: '100%',
    marginBottom: 34, // weird thing going on with safeareaview
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
  },
  searchForm: {
    marginTop: 20,
    marginRight: 24,
  },
});
