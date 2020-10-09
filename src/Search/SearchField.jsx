import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react';

const SearchField = ({ query, handleChange }) => {
  const inputRef = useRef(null);

  useEffect(() => inputRef.current.focus(), []);

  return (
    <Input className='searchBox' onChange={handleChange} ref={inputRef} fluid
      placeholder='Search a Movie, TV Show or Artist ...'
      action={{
        disabled: !query.length,
        color: query.length ? 'teal' : 'grey',
        icon: 'search',
        content: 'Search',
      }}
    />
  )
}

SearchField.propTypes = {
  query: PropTypes.string,
  handleChange: PropTypes.func.isRequired
}

export default SearchField;