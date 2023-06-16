import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../Zassets/styles/scaling';

const style = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: horizontalScale(24),
  },
  header: {
    marginTop: verticalScale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerIntroText: {
    fontFamily: 'Inter-Regular',
    fontSize: scaleFontSize(16),
    color: '#636776',
    marginBottom: verticalScale(5),
  },
  profileImage: {
    resizeMode: 'contain',
    width: horizontalScale(50),
    height: verticalScale(50),
  },
  searchBox: {
    marginTop: verticalScale(20),
  },
  highlightedImageContainer: {
    marginTop: verticalScale(15),
  },
  highlightedImage: {
    resizeMode: 'contain',
    width: '100%',
    height: verticalScale(160),
  },
  categoryItem: {
    marginRight: horizontalScale(10),
  },
  categoryHeader: {
    marginVertical: verticalScale(10),
  },
  donationItemsContainer: {
    width: '100%',
    marginTop: verticalScale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  donationItem: {
    width: '49%',
    marginBottom: verticalScale(23),
  },
});

export default style;
