import React from 'react';
import PropTypes from 'prop-types';
import { List, Image } from 'semantic-ui-react';

import constants from '../utils/constants';
import { addDefaultSrc } from '../utils/helpers';
import { SuggestionProps } from '../utils/propTypes';

const Suggestion = ({ suggestion, handleClick }) => {
  const {
    poster_path,
    profile_path,
    title,
    original_name,
    name,
    release_date,
    first_air_date
  } = suggestion;
  const imageSrc = `${constants.imageBaseUrl}${poster_path || profile_path}`;

  return (
    <List.Item as='a' onClick={() => handleClick(suggestion)}>
      <Image onError={addDefaultSrc} avatar src={imageSrc} />
      <List.Content>
        <List.Header>{title || original_name || name}</List.Header>
        <List.Description>{release_date || first_air_date}</List.Description>
      </List.Content>
    </List.Item>
  )
}

Suggestion.propTypes = {
  suggestion: SuggestionProps,
  handleClick: PropTypes.func.isRequired
}

export default Suggestion;