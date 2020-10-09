import { getQuery, getFilter, getSubmitted, getSuggestions, getMovies, getArtists, getShows, getDetailInfo, getInitialMenu, getMenus, shouldShowSuggestions, shouldShowStartScreen } from './selectors'

export const makeData = type => {
  return Array.from(Array(5).keys())
    .map(item => ({
      id: item + 1,
      name: `${type}_${item}`
    }))
}

describe('SELECTOR TESTS ::', () => {
  let initialState = {}

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

  it('should get the search value', () => {
    const query = getQuery(initialState);
    expect(query).toBe('searchString');
  })

  it('should be able to get the filter', () => {
    const filter = getFilter(initialState);
    expect(filter).toBe('all');
  })

  it('should get submitted state', () => {
    const submitted = getSubmitted(initialState);
    expect(submitted).toBeFalsy();
  })

  it('should read submitted state when submitted', () => {
    initialState.submitted = true;
    const submitted = getSubmitted(initialState);
    expect(submitted).toBeTruthy();
  })

  it('should get suggestions', () => {
    const suggestions = getSuggestions(initialState);
    expect(suggestions).toEqual([]);
  })

  it('should get suggestions when fetched', () => {
    initialState.suggestions = makeData('suggestion');
    const suggestions = getSuggestions(initialState);
    expect(Array.isArray(suggestions)).toBeTruthy();
    expect(suggestions.length).toBe(5);
  })

  it('should get movies', () => {
    const movies = getMovies(initialState);
    expect(movies).toEqual([]);
  })

  it('should get movies when fetched', () => {
    initialState.movies = {
      results: makeData('movie')
    };

    const movies = getMovies(initialState);
    expect(Array.isArray(movies)).toBeTruthy();
    expect(movies.length).toBe(5);
    expect(movies[0]).toHaveProperty('name');
    expect(movies[0].name).toBe('movie_0')
  })

  it('should get artists', () => {
    const artists = getArtists(initialState);
    expect(artists).toEqual([]);
  })

  it('should get artists when fetched', () => {
    initialState.artists = {
      results: makeData('artist')
    };

    const artists = getArtists(initialState);
    expect(Array.isArray(artists)).toBeTruthy();
    expect(artists.length).toBe(5);
    expect(artists[0]).toHaveProperty('name');
    expect(artists[0].name).toBe('artist_0')
  })

  it('should get shows', () => {
    const shows = getShows(initialState);
    expect(shows).toEqual([]);
  })

  it('should get shows when fetched', () => {
    initialState.shows = {
      results: makeData('show')
    };

    const shows = getShows(initialState);
    expect(Array.isArray(shows)).toBeTruthy();
    expect(shows.length).toBe(5);
    expect(shows[0]).toHaveProperty('name');
    expect(shows[0].name).toBe('show_0')
  })

  it('should get detail info initially', () => {
    const info = getDetailInfo(initialState);
    expect(info).toBe(null);
  })

  it('should get detail info when fetched', () => {
    initialState.detailInfo = {
      id: 1,
      overview: 'overview of the title',
      credits: {
        cast: [{ id: 101, name: 'abcd' }]
      }
    }
    const info = getDetailInfo(initialState);
    expect(info).toEqual({
      id: 1,
      overview: 'overview of the title',
      credits: {
        cast: [{ id: 101, name: 'abcd' }]
      }
    })
  })

  it('should get appropriate initial menu', () => {
    const res = getInitialMenu(initialState);
    expect(res).toBe('movies');
  })

  it('should get appropriate initial menu', () => {
    initialState.filter = 'person';
    const res = getInitialMenu(initialState);
    expect(res).toBe('artists');
  })

  it('should get menus as per filter selected', () => {
    initialState.filter = 'movie';
    const res = getMenus(initialState);
    expect(Array.isArray(res)).toBeTruthy();
    expect(res.length).toBe(1)
    expect(res[0][0]).toBe('movie');
    expect(res[0][1]).toEqual({
      category: 'movie',
      route: 'movies',
      label: 'Movies',
      order: 1,
      successType: 'MOVIE_SUCCESS'
    })
  })

  it('should get menus as per filter selected', () => {
    const res = getMenus(initialState);
    expect(Array.isArray(res)).toBeTruthy();
    expect(res.length).toBe(3)
  })

  it('should decide correctly to show suggestions', () => {
    const res = shouldShowSuggestions(initialState);
    expect(res).toBe(true);
  })

  it('should decide correctly to show suggestions when submitted', () => {
    initialState.submitted = true;
    const res = shouldShowSuggestions(initialState);
    expect(res).toBe(false);
  })

  it('should decided correctly to show start screen', () => {
    const res = shouldShowStartScreen(initialState);
    expect(res).toBe(true);
  })

  it('should decided correctly to show start screen when submitted', () => {
    initialState.submitted = true;
    const res = shouldShowStartScreen(initialState);
    expect(res).toBe(false);
  })

})