import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../Zassets/styles/scaling';

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
});

export default style;
