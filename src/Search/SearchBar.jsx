import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form, Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Filters from './Filters';
import SearchField from './SearchField';
import Suggestions from './Suggestions';
import { getData, setFilter, setSubmitted, setUserQuery } from '../state/actions';
import { getFilter, getQuery, shouldShowSuggestions } from '../state/selectors';
import { HistoryProps, LocationProps, FilterProps } from '../utils/propTypes';

import './search.css';

const SearchBar = props => {
  const { filter, getData, setFilter, setUserQuery, showSuggestions, userQuery } = props;

  useEffect(() => {
    if (showSuggestions) getData(userQuery, true);
  }, [getData, showSuggestions, userQuery])

  const handleChange = ({ target: { value } }) => setUserQuery(value);
  const handleFilterChange = (evnt, { value }) => setFilter(value);
  
  const searchUserQuery = evnt => {
    evnt.preventDefault();

    const { history, location, setSubmitted } = props;
    setSubmitted(true);
    getData(userQuery);

    if (location.pathname !== "/") history.push('/')
  };

  return <Container text style={{ paddingTop: 30 }}>
    <Form inverted className='searchForm' onSubmit={searchUserQuery}>
      <Filters filter={filter} handleFilterChange={handleFilterChange} />
      <SearchField query={userQuery} handleChange={handleChange} />
      <Suggestions />
    </Form>
  </Container>
}

SearchBar.propTypes = {
  filter: FilterProps,
  getData: PropTypes.func.isRequired,
  history: HistoryProps,
  location: LocationProps,
  setUserQuery: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
  setSubmitted: PropTypes.func.isRequired,
  showSuggestions: PropTypes.bool.isRequired,
  userQuery: PropTypes.string
}

const mapDispatchToProps = {
  getData,
  setUserQuery,
  setFilter,
  setSubmitted,
};

const mapState = state => ({
  filter: getFilter(state),
  showSuggestions: shouldShowSuggestions(state),
  userQuery: getQuery(state),
})

export default withRouter(connect(mapState, mapDispatchToProps)(SearchBar));