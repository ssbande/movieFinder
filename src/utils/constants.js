export default {
  appHeading: 'Movie Search App',
  queryLengthToStartSuggestions: 5,
  config: {
    movie: {
      category: 'movie',
      route: 'movies',
      label: 'Movies',
      order: 1,
      successType: 'MOVIE_SUCCESS'
    },
    tv: {
      category: 'tv',
      route: 'shows',
      label: 'TV Shows',
      order: 2,
      successType: 'SHOW_SUCCESS'
    },
    person: {
      category: 'person',
      route: 'artists',
      label: 'Artist',
      order: 3,
      successType: 'ARTIST_SUCCESS'
    },
    all: {
      category: 'all',
      route: '',
      label: 'All',
      order: 4,
      successType: "ALL_SUCCESS"
    }
  },
  categoryRouteMap : {
    movie: 'movies',
    tv: 'shows',
    person: 'artists',
  },
  apiBase: 'https://api.themoviedb.org/3/search/{key}?api_key=d3d860d3e818b5896db2b108c4604687&query={query}',
  imageBaseUrl: 'https://image.tmdb.org/t/p/w500',
  detailUrl: 'https://api.themoviedb.org/3/{category}/{id}?api_key=d3d860d3e818b5896db2b108c4604687&append_to_response={creditType}',
  actionTypes: {
    getData: 'GET_DATA',
    getDetails: 'GET_DETAILS',
    setSubmitted: 'SET_SUBMITTED',
    setFilter: 'SET_FILTER',
    setQuery: 'SET_USER_QUERY',
    suggestionsfetched: 'SUGGESTIONS_RECEIVED',
    detailsFetched: 'DETAILS_RECEIVED'
  },
  addToResponse: {
    combinedCredit: 'combined_credits',
    credit: 'credits'
  }
}