import { StyleSheet } from 'react-native';

import SearchDatesStyles from '../SearchDates/SearchDates.styles';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    height: '100%',
    backgroundColor: 'white',
  },
  // lazy sharing styles
  content: {
    ...SearchDatesStyles.content,
  },
  results: {
    marginBottom: 16,
  },
});
