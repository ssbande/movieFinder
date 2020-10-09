import PropTypes from 'prop-types';

export const HistoryProps = PropTypes.shape({
  push: PropTypes.func.isRequired
}).isRequired;

export const LocationProps = PropTypes.shape({
  pathname: PropTypes.string.isRequired
}).isRequired;

export const FilterProps = PropTypes.oneOf(['all', 'movie', 'person', 'tv']).isRequired;

export const SuggestionProps = PropTypes.shape({
  id: PropTypes.number.isRequired,
  poster_path: PropTypes.string,
  profile_path: PropTypes.string,
  title: PropTypes.string,
  original_name: PropTypes.string,
  name: PropTypes.string,
  release_date: PropTypes.string,
  first_air_date: PropTypes.string
}).isRequired;