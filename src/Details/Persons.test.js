import React from 'react';
import { shallow } from 'enzyme';

import Persons from './Persons';

const setup = () => ({
  props: {
    getDetails: jest.fn(),
    history: { push: jest.fn() },
    category: 'Persons',
    detailInfo: {
      id: 1001,
      profile_path: 'profile_path',
      title: 'title',
      overview: 'overview',
      genres: [{ name: 'genre1' }, { name: 'genre2' }, { name: 'genre3' }]
    }
  }
})

describe('Persons page tests', () => {
  it('should render correctly', () => {
    const { props } = setup();
    const wrapper = shallow(<Persons {...props} />);
    expect(wrapper).toMatchSnapshot();
  })
})