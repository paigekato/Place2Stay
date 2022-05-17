import { StyleSheet } from 'react-native';

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
  paragraph: {
    fontSize: 12,
    lineHeight: 15,
  },
  label: {
    fontSize: 10,
    lineHeight: 12,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
  hint: {
    fontSize: 16,
    lineHeight: 20,
  },
});

export const fontColorStyles = StyleSheet.create({
  grey: {
    color: 'grey',
  },
  black: {
    color: 'black',
  },
});
