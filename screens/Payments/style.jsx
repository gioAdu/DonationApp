import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../Zassets/styles/scaling';

const style = StyleSheet.create({
  paymentContainer: {
    marginHorizontal: horizontalScale(24),
  },
  donationAmount: {
    marginTop: verticalScale(12),
  },
  button: {
    marginHorizontal: horizontalScale(24),
    marginBottom: verticalScale(8),
  },
});

export default style;
