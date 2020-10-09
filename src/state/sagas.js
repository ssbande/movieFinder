import { put, takeLatest, all, select, takeEvery } from 'redux-saga/effects';
import constants from '../utils/constants';
import { callApi } from '../utils/helpers';
import { getFilter } from './selectors';

const { actionTypes: { getData, getDetails, setError }, config, addToResponse } = constants;

export function* fetchData(action) {
  try {
    const { config: { movie, tv, person, all: allFilters } } = constants;
    const filter = yield select(getFilter);
    let movies = { results: [] }; 
    let shows = { results: [] };
    let artists = { results: [] };
    let returnType = '';

    switch (filter) {
      case movie.category:
        movies = yield callApi({ ...action, key: movie.category });
        returnType = movie.successType;
        break;
      case person.category: 
        artists = yield callApi({ ...action, key: person.category });
        returnType = person.successType;
        break;
      case tv.category:
        shows = yield callApi({ ...action, key: tv.category });
        returnType = tv.successType;
        break;
      case allFilters.category:
      default:
        [movies, shows, artists] = yield all([
          yield callApi({ ...action, key: movie.category }),
          yield callApi({ ...action, key: tv.category }),
          yield callApi({ ...action, key: person.category })
        ])
        returnType = allFilters.successType;
        break;
    }

    returnType = action.isSuggestion ? 'SUGGESTIONS_RECEIVED' : returnType;
    yield put({ type: returnType, res: { movies, shows, artists } })
  } catch (error) {
    console.log('error in suggestion fetch: ', error);
    yield put({ type: setError });
  }
}

export function* fetchDetails(action) {
  try {
    const creditType = action.category === config.person.category 
      ? addToResponse.combinedCredit 
      : addToResponse.credit;
      
    const json = yield callApi({ ...action, creditType }, constants.detailUrl);
    yield put({ type: "DETAILS_RECEIVED", res: json, });
  } catch (error) {
    console.log('error occured: ', error);
    yield put({ type: setError });
  }
}


export function* actionWatcher() {
  yield takeLatest(getData, fetchData)
  yield takeEvery(getDetails, fetchDetails)
}

export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}