import {StyleSheet} from 'react-native';
import {scaleFontSize, verticalScale} from '../../Zassets/styles/scaling';

const style = StyleSheet.create({
  button: {
    backgroundColor: 'rgb(43, 120, 242)',
    height: verticalScale(55),
    justifyContent: 'center',
    borderRadius: 50,
  },
  title: {
    fontFamily: 'Inter-Regular',
    fontSize: scaleFontSize(16),
    color: 'white',
    lineHeight: scaleFontSize(19),
    textAlign: 'center',
  },
  isDisabled: {
    backgroundColor: 'rgba(43, 120, 242, 0.6)',
  },
});

export default style;
