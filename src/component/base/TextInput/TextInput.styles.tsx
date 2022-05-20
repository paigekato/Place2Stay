import { StyleSheet } from 'react-native';

import { colors } from '/theme/colors';

export default StyleSheet.create({
  container: {
    padding: 10,
    paddingRight: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.highlightColor,
    borderRadius: 12,
  },
  input: {
    width: '100%',
    marginLeft: 4,
  },
});
