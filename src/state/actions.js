import constants from '../utils/constants';
const { actionTypes } = constants;

export const setUserQuery = userQuery => ({ type: actionTypes.setQuery, userQuery });
export const setFilter = filter => ({ type: actionTypes.setFilter, filter });
export const setSubmitted = val => ({ type: actionTypes.setSubmitted, val });

export const getData = (query, isSuggestion = false) => ({
  type: actionTypes.getData,
  query,
  isSuggestion
});

export const getDetails = (category, id) => ({
  type: actionTypes.getDetails,
  category,
  id
})