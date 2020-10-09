import constants from './constants';
import notFoundImage from '../images/inf.png';

export const createUrl = (data, baseUrl) => baseUrl.replace(/{\w+}/g, all => data[all.slice(1, -1)] || all);
export const createImageUrl = imgPath => `${constants.imageBaseUrl}${imgPath}`;
export const addDefaultSrc = evnt => evnt.target.src = notFoundImage;

const handleApiErrors = response => {
  if (!response.ok) {
    throw Error(response.statusText);
  }

  return response;
}

export const callApi = (data, baseUrl = constants.apiBase) => {
  const url = createUrl(data, baseUrl);
  return fetch(url)
    .then(handleApiErrors)
    .then(response => response.json())
    .catch(error => { throw error; });
}