import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../Zassets/styles/scaling';

const style = StyleSheet.create({
  inputContainer: {
    marginHorizontal: horizontalScale(24),
    flex: 1,
    justifyContent: 'center',
    gap: verticalScale(24),
  },
  registrationButton: {
    alignItems: 'center',
  },
  backBtn: {
    marginLeft: horizontalScale(14),
    marginTop: verticalScale(7),
  },
  error: {
    fontFamily: 'Inter-Regular',
    fontSize: scaleFontSize(16),
    color: 'red',
  },
  success: {
    fontFamily: 'Inter-Regular',
    fontSize: scaleFontSize(16),
    color: '#28A745',
  },
});

export default style;
