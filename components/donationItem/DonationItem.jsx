import React from 'react';
import {Image, View, Pressable} from 'react-native';
import style from './style';
import PropTypes from 'prop-types';
import Badge from '../Badge/Badge';
import Header from '../header/Header';

const DonationItem = props => {
  return (
    <Pressable
      onPress={() => {
        props.onPress(props.donationItemId);
      }}>
      <View style={style.imageContainer}>
        <View style={style.badge}>
          <Badge title={props.title} />
        </View>
        <Image source={{uri: props.uri}} style={style.image} />
      </View>
      <Header
        title={props.donationTitle}
        type={3}
        color={'#0A043C'}
        numberOfLines={1}
      />
      <View style={style.price}>
        <Header
          title={'$' + props.price.toFixed(2)}
          type={3}
          color={'#156CF7'}
        />
      </View>
    </Pressable>
  );
};

DonationItem.defaultProps = {
  onPress: () => {},
};

DonationItem.propTypes = {
  donationItemId: PropTypes.number.isRequired,
  uri: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  donationTitle: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onPress: PropTypes.func,
};

export default DonationItem;
