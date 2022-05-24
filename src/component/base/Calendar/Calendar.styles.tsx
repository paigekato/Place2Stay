import { StyleSheet } from 'react-native';

import { colors } from '/theme/colors';

export const RANGE_COLOR = colors.highlightColor;

export const rangeStyles = {
  color: RANGE_COLOR,
  textColor: 'white',
};

export default StyleSheet.create({
  container: {
    padding: 8,
  },
});
