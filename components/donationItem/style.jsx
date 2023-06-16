import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../Zassets/styles/scaling';

const style = StyleSheet.create({
  image: {
    width: horizontalScale(148),
    height: verticalScale(170),
    resizeMode: 'cover',
    borderRadius: horizontalScale(20)
  },
  imageContainer: {
    position: 'relative',
    marginBottom: verticalScale(16),
  },
  badge: {
    position: 'absolute',
    top: verticalScale(13),
    left: horizontalScale(10),
    zIndex: 99,
  },
  price: {
    marginTop: verticalScale(5),
  },
});

export default style;
