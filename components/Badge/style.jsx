import {StyleSheet} from 'react-native';
import {scaleFontSize, verticalScale} from '../../Zassets/styles/scaling';

const style = StyleSheet.create({
  badge: {
    backgroundColor: '#145855',
    paddingVertical: verticalScale(5),
    justifyContent: 'center',
    borderRadius: 50,
  },
  title: {
    fontFamily: 'Inter-SemiBold',
    fontSize: scaleFontSize(10),
    color: 'white',
    lineHeight: scaleFontSize(12),
    textAlign: 'center',
  },
});

export default style;
