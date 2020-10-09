import React from 'react';
import { shallow } from 'enzyme';

import PersonCast from './PersonCast';

const setup = () => ({
  props: {
    cast: [{
      id: 1001,
      poster_path: 'poster_path',
      name: 'name1',
      character: 'character1',
      name: 'name',
      title: 'title',
      film: 'film',
      media_type: 'movie',
      vote_count: 123
    }],
    handleCardClick: jest.fn(),
  }
})

describe('Person Cast', () => {
  it('should render correctly', () => {
    const { props } = setup();
    const wrapper = shallow(<PersonCast {...props} />);
    expect(wrapper).toMatchSnapshot();
  })
})