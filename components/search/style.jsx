import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../Zassets/styles/scaling';

const style = StyleSheet.create({
  TextInput: {
    marginLeft: horizontalScale(6),
    flex: 1,
    height: '100%',
    fontFamily: 'Inter-Regular',
    fontSize: scaleFontSize(14),
    color: '#686C7A',
  },
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: horizontalScale(16),
    backgroundColor: '#F3F5F9',
    height: verticalScale(50),
    alignItems: 'center',
    borderRadius: horizontalScale(15),
  },
});

export default style;
