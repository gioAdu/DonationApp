import React from 'react';

import {Pressable, Text} from 'react-native';
import PropTypes from 'prop-types';
import style from './style';

const Button = props => {
  return (
    <Pressable
      onPress={() => props.onPress()}
      style={[style.button, props.isDisabled && style.isDisabled]}
      disabled={props.isDisabled}>
      <Text style={style.title}>{props.title}</Text>
    </Pressable>
  );
};

Button.default = {
  isDisabled: false,
  onPress: () => {},
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  isDisabled: PropTypes.bool,
};

export default Button;
