import { StyleSheet } from 'react-native';
import { colors } from 'theme/colors';

export default StyleSheet.create({
  heading1: {
    fontSize: 24,
    lineHeight: 29,
    fontWeight: '800',
    fontFamily: 'MerriweatherSans-Bold',
  },
  heading2: {
    fontSize: 18,
    lineHeight: 29,
    fontWeight: '600',
    fontFamily: 'MerriweatherSans-Bold',
  },
  heading3: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
    fontFamily: 'MerriweatherSans-Bold',
  },
  paragraph: {
    fontSize: 12,
    lineHeight: 15,
  },
  label: {
    fontSize: 10,
    lineHeight: 12,
    fontWeight: '500',
    letterSpacing: 0.6,
    textTransform: 'uppercase',
  },
  hint: {
    fontSize: 16,
    lineHeight: 20,
  },
});

export const fontColorStyles = StyleSheet.create({
  grey: {
    color: colors.textSecondary,
  },
  black: {
    color: colors.textPrimary,
  },
  white: {
    color: 'white',
  },
});
