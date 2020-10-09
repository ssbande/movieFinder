import { createReducer } from 'redux-create-reducer';

import constants from "../utils/constants";

const initialState = {
	userQuery: '',
	filter: 'all',
	movies: null,
	shows: null,
	artists: null,
	suggestions: [],
	submitted: false,
	detailInfo: null,
	error: false
}

const {
	actionTypes: {
		setFilter,
		setQuery,
		setSubmitted,
		suggestionsfetched,
		detailsFetched,
		setError,
	},
	config: {
		movie,
		tv,
		person,
		all
	}
} = constants;

const handlers = {
	[setFilter]: (state, action) => ({ ...state, filter: action.filter, submitted: false, movies: null, shows: null, artists: null, suggestions: [] }),
	[setQuery]: (state, action) => ({ ...state, userQuery: action.userQuery, submitted: false }),
	[setSubmitted]: (state, action) => ({ ...state, submitted: action.val, detailInfo: null }),
	[setError]: state => ({...state, ...initialState, error: true }),
	[movie.successType]: (state, action) => ({ ...state, movies: action.res.movies, shows: null, artists: null }),
	[tv.successType]: (state, action) => ({ ...state, shows: action.res.shows, movies: null, artists: null }),
	[person.successType]: (state, action) => ({ ...state, artists: action.res.artists, movies: null, shows: null }),
	[all.successType]: (state, action) => ({ ...state, movies: action.res.movies, shows: action.res.shows, artists: action.res.artists }),
	[detailsFetched]: (state, action) => ({ ...state, detailInfo: action.res }),
	[suggestionsfetched]: (state, action) => {
		const { res: { movies: mList, shows: sList, artists: aList } } = action;
		const movieList = mList.results.map(m => ({ ...m, itemType: movie.route }));
		const showList = sList.results.map(m => ({ ...m, itemType: tv.route }));
		const artistList = aList.results.map(m => ({ ...m, itemType: person.route }));
		return { ...state, suggestions: [...movieList, ...showList, ...artistList], submitted: false }
	}
}

export default createReducer(initialState, handlers);