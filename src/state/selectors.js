import get from 'lodash/get';
import constants from '../utils/constants';
const { config } = constants;

export const getQuery = state => get(state, 'userQuery', null);
export const getFilter = state => get(state, 'filter', null);
export const getSubmitted = state => get(state, 'submitted', false);
export const getSuggestions = state => get(state, 'suggestions', []);
export const getMovies = state => get(state, 'movies.results', []);
export const getShows = state => get(state, 'shows.results', []);
export const getArtists = state => get(state, 'artists.results', []);
export const getDetailInfo = state => get(state, 'detailInfo', null);
export const getError = state => get(state, 'error', false);

export const getInitialMenu = state => {
  const filter = getFilter(state);
  return filter === config.all.category
    ? config.movie.route
    : config[filter].route;
}

export const getMenus = state => {
  const filter = getFilter(state);
  return Object.entries(config)
    .filter(item => {
      return (filter !== 'all') 
        ? item[0] === filter
        : item[0] !== 'all';
    });
}

export const shouldShowSuggestions = state => {
  const { queryLengthToStartSuggestions } = constants;
  const query = getQuery(state);
  const isSubmitted = getSubmitted(state);

  return query.length >= queryLengthToStartSuggestions && !isSubmitted;
}

export const shouldShowStartScreen = state => {
  const movies = getMovies(state);
  const shows = getShows(state);
  const artists = getArtists(state);
  const submitted = getSubmitted(state);

  return !movies.length && !shows.length && !artists.length && !submitted;
}