import {StyleSheet} from 'react-native';
import {scaleFontSize} from '../../Zassets/styles/scaling';

const style = StyleSheet.create({
  title1: {
    fontFamily: 'Inter-SemiBold',
    fontSize: scaleFontSize(24),
    lineHeight: scaleFontSize(29),
  },
  title2: {
    fontFamily: 'Inter-SemiBold',
    fontSize: scaleFontSize(18),
    lineHeight: scaleFontSize(22),
  },
  title3: {
    fontFamily: 'Inter-SemiBold',
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(19),
  },
});

export default style;
