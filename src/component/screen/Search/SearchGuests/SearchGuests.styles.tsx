import { StyleSheet } from 'react-native';
import { colors } from 'theme/colors';

import SearchDatesStyles from '../SearchDates/SearchDates.styles';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    height: '100%',
    backgroundColor: 'white',
    marginBottom: 2,
  },
  heading: {
    paddingBottom: 24,
  },
  // lazy sharing styles
  content: {
    ...SearchDatesStyles.content,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 12,
    borderTopColor: colors.highlightColorLight,
    borderTopWidth: 1,
    paddingTop: 8,
  },
  text: {
    textTransform: 'capitalize',
  },
  increment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
