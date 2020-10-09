import fetchMock from 'jest-fetch-mock';
import { createUrl, createImageUrl, addDefaultSrc, callApi } from './helpers';

fetchMock.enableMocks();

describe('HELPER TESTS :: ', () => {
  it('should create URL properly', () => {
    const res = createUrl({ abc: 'testValue' }, 'http://doSomething/{abc}');
    expect(res).toBe('http://doSomething/testValue');
  })

  it('should be able to create URL for multiple replacements', () => {
    const data = { abc: 'testValue1', pqr: 'testValue2' };
    const url = 'http://doSomething/{abc}/xyz/{pqr}';
    const res = createUrl(data, url);
    expect(res).toBe('http://doSomething/testValue1/xyz/testValue2')
  })

  it('should be able to create image URL correctly', () => {
    const res = createImageUrl('/someImagePath');
    expect(res).toBe('https://image.tmdb.org/t/p/w500/someImagePath')
  })

  it('should be able to add default Image', () => {
    const evnt = { target: { src: '' } };
    const res = addDefaultSrc(evnt);
    expect(res).toBe('inf.png');
  })

  describe('API Call Tests', () => {
    beforeEach(() => {
      fetchMock.resetMocks();
    });

    it('should be able to call APIs properly', () => {
      const data = { abc: 'testValue' }
      const url = 'http://doSomething/{abc}';

      fetchMock.mockResponseOnce(JSON.stringify({ movieName: 'ABCD' }))

      return expect(callApi(data, url))
        .resolves
        .toEqual({ movieName: 'ABCD' });
    })

    it('should be able to handle reject properly', () => {
      const data = { abc: 'testValue' }
      const url = 'http://doSomething/{abc}';

      fetch.mockReject(() => Promise.reject('API is down'));

      return expect(callApi(data, url)).rejects.toMatch('API is down');
    })
  })
})