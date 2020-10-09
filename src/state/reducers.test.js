import reducer from './reducers';
import constants from '../utils/constants';
import { makeData } from './selectors.test';
const {
  actionTypes: {
    setFilter,
    setQuery,
    setSubmitted,
    detailsFetched,
    suggestionsfetched
  },
  config: { movie, tv, person, all }
} = constants;

describe('REDUCER TESTS :: ', () => {
  let initialState = {};
  beforeEach(() => {
    initialState = {
      userQuery: 'searchString',
      filter: 'all',
      movies: null,
      shows: null,
      artists: null,
      suggestions: [],
      submitted: false,
      detailInfo: null
    }
  })

  it('can set filter properly', () => {
    const action = { type: setFilter, filter: 'movie' }
    const newState = reducer(initialState, action);
    expect(newState).toHaveProperty('filter');
    expect(newState.filter).toBe('movie');
  })

  it('can set the user query properly', () => {
    const action = { type: setQuery, userQuery: 'searchSomething' }
    const newState = reducer(initialState, action);
    expect(newState).toHaveProperty('userQuery');
    expect(newState.userQuery).toBe('searchSomething');
  })

  it('should be able to set submitted state', () => {
    const action = { type: setSubmitted, val: true }
    const newState = reducer(initialState, action);
    expect(newState).toHaveProperty('submitted');
    expect(newState.submitted).toBe(true);
  })

  it('should be able to set fetched movies', () => {
    const action = {
      type: movie.successType,
      res: {
        movies: makeData('movie')
      }
    }

    const newState = reducer(initialState, action);
    expect(newState).toHaveProperty('movies');
    expect(Array.isArray(newState.movies)).toBeTruthy();
    expect(newState.shows).toBeFalsy();
    expect(newState.artists).toBeFalsy();
    expect(newState.movies.length).toBe(5);
    expect(newState.movies[0]).toHaveProperty('name');
    expect(newState.movies[0].name).toBe('movie_0');
  })

  it('should be able to set fetched shows', () => {
    const action = {
      type: tv.successType,
      res: {
        shows: makeData('show')
      }
    }

    const newState = reducer(initialState, action);
    expect(newState).toHaveProperty('shows');
    expect(Array.isArray(newState.shows)).toBeTruthy();
    expect(newState.movies).toBeFalsy();
    expect(newState.artists).toBeFalsy();
    expect(newState.shows.length).toBe(5);
    expect(newState.shows[0]).toHaveProperty('name');
    expect(newState.shows[0].name).toBe('show_0');
  })

  it('should be able to set fetched persons', () => {
    const action = {
      type: person.successType,
      res: {
        artists: makeData('artist')
      }
    }

    const newState = reducer(initialState, action);
    expect(newState).toHaveProperty('artists');
    expect(Array.isArray(newState.artists)).toBeTruthy();
    expect(newState.shows).toBeFalsy();
    expect(newState.movies).toBeFalsy();
    expect(newState.artists.length).toBe(5);
    expect(newState.artists[0]).toHaveProperty('name');
    expect(newState.artists[0].name).toBe('artist_0');
  })

  it('should be able to set all movies, shows and persons', () => {
    const action = {
      type: all.successType,
      res: {
        movies: makeData('movie'),
        shows: makeData('show'),
        artists: makeData('artist')
      }
    }

    const newState = reducer(initialState, action);
    expect(newState).toHaveProperty('artists');
    expect(newState).toHaveProperty('movies');
    expect(newState).toHaveProperty('shows');
    expect(Array.isArray(newState.artists)).toBeTruthy();
    expect(Array.isArray(newState.movies)).toBeTruthy();
    expect(Array.isArray(newState.shows)).toBeTruthy();
    expect(newState.artists.length).toBe(5);
    expect(newState.shows.length).toBe(5);
    expect(newState.movies.length).toBe(5);
    expect(newState.artists[0]).toHaveProperty('name');
    expect(newState.artists[0].name).toBe('artist_0');
    expect(newState.shows[0]).toHaveProperty('name');
    expect(newState.shows[0].name).toBe('show_0');
    expect(newState.movies[0]).toHaveProperty('name');
    expect(newState.movies[0].name).toBe('movie_0');
  })

  it('should be able to set fetched detailed info', () => {
    const action = {
      type: detailsFetched,
      res: { id: 1, someotherInfo: { name: 'detailsFecthed ' } }
    }

    const newState = reducer(initialState, action);
    expect(newState).toHaveProperty('detailInfo');
    expect(newState.detailInfo).toEqual({
      id: 1,
      someotherInfo: {
        name: 'detailsFecthed '
      }
    })
  })

  it('should be able to set fetched suggestions', () => {
    const action = {
      type: suggestionsfetched,
      res: {
        movies: { results: makeData('movie') },
        shows: { results: makeData('show') },
        artists: { results: makeData('artist') },
      }
    }

    const newState = reducer(initialState, action);
    expect(newState).toHaveProperty('suggestions');
    expect(Array.isArray(newState.suggestions)).toBeTruthy();
    expect(newState.suggestions.length).toBe(15);
    expect(newState.suggestions[0]).toHaveProperty('itemType');
    expect(newState.suggestions[0].itemType).toBe(movie.route);
  })
})