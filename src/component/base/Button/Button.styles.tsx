import { StyleSheet } from 'react-native';
import { colors } from 'theme/colors';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    paddingVertical: 12,
    backgroundColor: colors.highlightColor,
    borderRadius: 4,
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
  center: {},
  left: {
    alignSelf: 'flex-start',
  },
  right: {
    alignSelf: 'flex-end',
  },
});
