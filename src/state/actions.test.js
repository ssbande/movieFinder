import { setUserQuery, setFilter, setSubmitted, getData, getDetails } from './actions';

describe('ACTION TESTS :: ', () => {
  it('should instantiate action creator for setting user query', () => {
    const action = setUserQuery('searchQuery');
    expect(action).toHaveProperty('type');
    expect(action).toHaveProperty('userQuery');
    expect(action.type).toBe('SET_USER_QUERY');
    expect(action.userQuery).toBe('searchQuery');
  })

  it('should instantiate action creator for setting filter', () => {
    const action = setFilter('movies');
    expect(action).toHaveProperty('type');
    expect(action).toHaveProperty('filter');
    expect(action.type).toBe('SET_FILTER');
    expect(action.filter).toBe('movies');
  })

  it('should instantiate action creator for setting submitted state', () => {
    const action = setSubmitted(true);
    expect(action).toHaveProperty('type');
    expect(action).toHaveProperty('val');
    expect(action.type).toBe('SET_SUBMITTED');
    expect(action.val).toBe(true);
  })

  it('should instantiate action creator for getting data', () => {
    const action = getData('searchString');
    expect(action).toHaveProperty('type');
    expect(action).toHaveProperty('query');
    expect(action).toHaveProperty('isSuggestion');
    expect(action.type).toBe('GET_DATA');
    expect(action.query).toBe('searchString');
    expect(action.isSuggestion).toBe(false);
  })

  it('should instantiate action creator for getting data as suggestions', () => {
    const action = getData('suggestionSearchString', true);
    expect(action).toHaveProperty('type');
    expect(action).toHaveProperty('query');
    expect(action).toHaveProperty('isSuggestion');
    expect(action.type).toBe('GET_DATA');
    expect(action.query).toBe('suggestionSearchString');
    expect(action.isSuggestion).toBe(true);
  })

  it('should instantiate action creator for getting details of an item', () => {
    const action = getDetails('movie', 1234);
    expect(action).toHaveProperty('type');
    expect(action).toHaveProperty('category');
    expect(action).toHaveProperty('id');
    expect(action.type).toBe('GET_DETAILS');
    expect(action.category).toBe('movie');
    expect(action.id).toBe(1234);
  })

})