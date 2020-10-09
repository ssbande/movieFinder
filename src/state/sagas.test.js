import { takeEvery, takeLatest, put, select, all } from 'redux-saga/effects';
import { fetchData, fetchDetails, actionWatcher } from './sagas';

describe('SAGAS TESTS ::', () => {
  const generator = actionWatcher();

  it('should dispatch action "GET_DATA" ', () => {
    expect(generator.next().value)
      .toEqual(takeLatest('GET_DATA', fetchData));
  })

  it('should dispatch action "GET_DETAILS" ', () => {
    expect(generator.next().value).toEqual(takeEvery('GET_DETAILS', fetchDetails));
    expect(generator.next().done).toBeTruthy();
  })
})