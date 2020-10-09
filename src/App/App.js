import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter, Switch, Route } from 'react-router-dom';
import { Header, Divider } from 'semantic-ui-react';

import MovieDetails from '../Details/Movies';
import ShowDetails from '../Details/Shows';
import PersonDetails from '../Details/Persons';
import Home from '../Landing/Home';
import SearchBar from '../Search/SearchBar';
import Error from './Error';
import { getError } from '../state/selectors';
import constants from '../utils/constants';
import { HistoryProps } from '../utils/propTypes';

import 'semantic-ui-css/semantic.min.css'
import './App.css';

const App = props => {
  const { history, isError } = props;
  const { appHeading, config: { movie, tv, person } } = constants;

  useEffect(() => {
    if(isError) history.push('/error');
  }, [isError, history])

  return (
    <div className='app'>
      <div className='appHeading'>
        <Header id="heading" as='h1' color='teal' onClick={() => history.push('/')}>{appHeading}</Header>
      </div>
      <Divider inverted />
      <SearchBar />
      <Switch>
        <Route exact path='/'><Home /></Route>
        <Route path='/movies/:movieId'><MovieDetails category={movie.category} /></Route>
        <Route path='/shows/:showId'><ShowDetails category={tv.category} /></Route>
        <Route path='/artists/:artistId'><PersonDetails category={person.category} /></Route>
        <Route path='/error'><Error /></Route>
      </Switch>
    </div>
  );
}

App.propTypes = {
  history: HistoryProps,
  isError: PropTypes.bool.isRequired
}

const mapState = state => ({
  isError: getError(state)
})

export default withRouter(connect(mapState)(App));
