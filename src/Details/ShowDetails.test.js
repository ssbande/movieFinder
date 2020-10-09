import React from 'react';
import { shallow } from 'enzyme';

import ShowDetails from './ShowDetails';

const setup = () => ({
  props: {
    detailInfo: {
      poster_path: 'poster_path',
      name: 'name',
      overview: 'overview',
      genres: [{name: 'genre1'}, {name: 'genre2'}, {name: 'genre3'}]
    }
  }
})

describe('Movie Detail', () => {
  it('should render correctly', () => {
    const { props } = setup();
    const wrapper = shallow(<ShowDetails {...props} />);
    expect(wrapper).toMatchSnapshot();
  })
})