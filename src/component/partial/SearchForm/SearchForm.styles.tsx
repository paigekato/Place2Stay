import { StyleSheet } from 'react-native';
import { colors } from 'theme/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  spacing: {
    marginBottom: 24,
  },
  underline: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.highlightColor,
    // Janky styling to make the underline the width of the card
    // without having to change everything. #lazy
    marginLeft: -24,
    marginRight: -27,
  },
  placeWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  iconWrapper: {
    borderRadius: 10,
    backgroundColor: colors.backgroundSecondary,
    padding: 10,
    alignItems: 'center',
    marginRight: 8,
  },
});
