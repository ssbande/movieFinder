import React from 'react';
import { shallow } from 'enzyme';

import Shows from './Shows';

const setup = () => ({
  props: {
    getDetails: jest.fn(),
    history: { push: jest.fn() },
    category: 'shows',
    detailInfo: {
      id: 1001,
      profile_path: 'profile_path',
      title: 'title',
      overview: 'overview',
      genres: [{ name: 'genre1' }, { name: 'genre2' }, { name: 'genre3' }]
    }
  }
})

describe('Shows page tests', () => {
  it('should render correctly', () => {
    const { props } = setup();
    const wrapper = shallow(<Shows {...props} />);
    expect(wrapper).toMatchSnapshot();
  })
})