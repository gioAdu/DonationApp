import React from 'react';
import {Pressable} from 'react-native';
import PropTypes from 'prop-types';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import style from './style';

const BackBtn = props => {
  return (
    <Pressable style={style.container} onPress={() => props.onPress()}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </Pressable>
  );
};

BackBtn.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default BackBtn;
