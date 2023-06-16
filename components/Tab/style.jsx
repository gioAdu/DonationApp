import {StyleSheet} from 'react-native';
import {scaleFontSize, verticalScale} from '../../Zassets/styles/scaling';

const style = StyleSheet.create({
  tab: {
    backgroundColor: 'rgb(43, 120, 242)',
    height: verticalScale(50),
    justifyContent: 'center',
    borderRadius: 50,
  },
  title: {
    fontFamily: 'Inter-Regular',
    fontSize: scaleFontSize(14),
    color: 'white',
    lineHeight: scaleFontSize(17),
    textAlign: 'center',
  },
  isInactiveTab: {
    backgroundColor: '#F3F5F9',
  },
  inactiveTitle: {
    color: '#79869F',
  },
});

export default style;
