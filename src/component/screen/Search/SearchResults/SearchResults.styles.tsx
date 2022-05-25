import { StyleSheet } from 'react-native';
import { colors } from 'theme/colors';

import SearchDatesStyles from '../SearchDates/SearchDates.styles';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    marginBottom: 2,
    height: '100%',
    backgroundColor: 'white',
  },
  wrapper: {
    flex: 1,
  },
  searchResults: {
    marginBottom: 24,
  },
  heading: {
    paddingBottom: 14,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: colors.highlightColorLight,
    marginHorizontal: -24,
    paddingHorizontal: 24,
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
  button: {
    marginTop: 12,
  },
  increment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
