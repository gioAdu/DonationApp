import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../Zassets/styles/scaling';

const style = StyleSheet.create({
  paymentContainer: {
    marginHorizontal: horizontalScale(24),
    marginTop: verticalScale(7),
  },
  headerWrapper: {
    alignItems: 'center',
  },
  donationAmount: {
    marginTop: verticalScale(10),
    fontFamily: 'Inter-Regular',
    fontSize: scaleFontSize(18),
    textAlign: 'center',
  },
  button: {
    marginHorizontal: horizontalScale(24),
    marginBottom: verticalScale(8),
  },
  image: {
    marginVertical: verticalScale(12),
    resizeMode: 'cover',
    width: '100%',
    height: verticalScale(200),
  },
  bottomBorder: {
    marginTop: verticalScale(5),
    borderBottomWidth: 1,
    width: '100%',
  },
});

export default style;
