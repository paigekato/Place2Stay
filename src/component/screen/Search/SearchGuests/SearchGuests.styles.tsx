import { StyleSheet } from 'react-native';

import SearchStayStyles from '../SearchStay/SearchStay.styles';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    height: '100%',
    backgroundColor: 'white',
  },
  // lazy sharing styles
  content: {
    ...SearchStayStyles.content,
  },
  results: {
    marginBottom: 16,
  },
});
