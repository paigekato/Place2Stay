import { StyleSheet } from 'react-native';
import { colors } from 'theme/colors';

export default StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.highlightColor,
    borderRadius: 20,
    shadowColor: colors.highlightColor,
    shadowOffset: { width: -4, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    height: 52,
  },
  placeholder: {
    fontWeight: '600',
  },
  textWrapper: {
    flexGrow: 1,
    marginLeft: 8,
  },
});
