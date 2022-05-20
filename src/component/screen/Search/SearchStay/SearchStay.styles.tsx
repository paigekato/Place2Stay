import { StyleSheet } from 'react-native';

import SearchBoxStyles from '/component/partial/SearchDetails/SearchBox/SearchBox.styles';
import { colors } from '/theme/colors';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    height: '100%',
    backgroundColor: colors.backgroundPrimary,
  },
  content: {
    ...SearchBoxStyles.wrapper,
    flex: 1,
    marginBottom: 18,
    paddingTop: 24,
    alignItems: 'flex-start',
  },
  flexibleWrapper: {
    marginTop: 24,
    borderTopWidth: 1,
    borderColor: colors.highlightColorLight,
    paddingTop: 24,
  },
  optionsWrapper: {
    flexDirection: 'row',
    marginTop: 12,
  },
  option: {
    borderRadius: 100,
    borderWidth: 1,
    borderColor: colors.highlightColorLight,
    paddingVertical: 4,
    paddingHorizontal: 12,
    marginRight: 12,
  },
  optionText: {
    textTransform: 'capitalize',
  },
  activeOption: {
    backgroundColor: colors.backgroundSecondary,
    borderColor: colors.highlightColor,
    borderWidth: 1,
  },
});
