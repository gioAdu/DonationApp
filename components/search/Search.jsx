import React, {useRef, useState} from 'react';
import {Pressable, TextInput} from 'react-native';
import style from './style';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {scaleFontSize} from '../../Zassets/styles/scaling';
import PropTypes from 'prop-types';
const Search = props => {
  const textRef = useRef(null);
  const [search, setSearch] = useState('');
  const handleFocus = () => {
    textRef.current.focus();
  };

  const handleSearch = value => {
    setSearch(value);
    props.onSearch(value);
  };

  return (
    <Pressable style={style.searchContainer} onPress={handleFocus}>
      <FontAwesomeIcon
        icon={faSearch}
        color={'#25C0FF'}
        size={scaleFontSize(22)}
      />
      <TextInput
        ref={textRef}
        onChangeText={value => handleSearch(value)}
        value={search}
        placeholder={props.placeholder}
        style={style.TextInput}
      />
    </Pressable>
  );
};

Search.defaultProps = {
  onSearch: () => {},
  placeholder: 'Search',
};

Search.propTypes = {
  onSearch: PropTypes.func,
  placeholder: PropTypes.string,
};

export default Search;
