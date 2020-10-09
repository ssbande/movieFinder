import React from 'react';
import PropTypes from 'prop-types';
import { Segment, List } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import NoSuggestion from './NoSuggestion';
import Suggestion from './Suggestion';
import { setSubmitted } from '../state/actions';
import { getFilter, getQuery, getSuggestions, shouldShowSuggestions } from '../state/selectors';
import { HistoryProps, LocationProps } from '../utils/propTypes';

const Suggestions = props => {
  const { history, location, setSubmitted, showSuggestions, suggestions } = props;

  if (!showSuggestions) return null;

  const handleSuggestionClick = ({ itemType, id }) => {
    setSubmitted(true);
    const newLocation = location.pathname !== '/'
      ? `../${itemType}/${id}`
      : `/${itemType}/${id}`;

    history.push(newLocation);
  }

  return <Segment className='queryResult' inverted>
    {!suggestions.length
      ? <NoSuggestion />
      : <List divided inverted relaxed link>
        {suggestions.map(suggestion =>
          <Suggestion key={suggestion.id} suggestion={suggestion} handleClick={handleSuggestionClick} />
        )}
      </List>
    }
  </Segment>
}

Suggestions.propTypes = {
  history: HistoryProps,
  location: LocationProps,
  setSubmitted: PropTypes.func.isRequired,
  showSuggestions: PropTypes.bool.isRequired,
  suggestions: PropTypes.array.isRequired
}

const mapDispatchToProps = {
  setSubmitted
};

const mapState = state => ({
  userQuery: getQuery(state),
  filter: getFilter(state),
  suggestions: getSuggestions(state),
  showSuggestions: shouldShowSuggestions(state),
})

export default withRouter(connect(mapState, mapDispatchToProps)(Suggestions));