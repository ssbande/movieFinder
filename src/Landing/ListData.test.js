import React from 'react';
import { shallow } from 'enzyme';
import { makeData } from '../state/selectors.test';

import ListData from './ListData';

const setup = () => ({
  props: {
    activeItem: 'movies',
    history: { push: jest.fn() },
    movies: makeData('movie'),
    shows: makeData('show'),
    artists: makeData('artist'),
  }
})

describe('List Data tests', () => {
  it('should render correctly for movie view', () => {
    const { props } = setup();
    const wrapper = shallow(<ListData {...props} />);
    expect(wrapper).toMatchSnapshot();
  })

  it('should render correctly for TV shows view', () => {
    const { props } = setup();
    props.activeItem = 'shows';
    const wrapper = shallow(<ListData {...props} />);
    expect(wrapper).toMatchSnapshot();
  })

  it('should render correctly for person view', () => {
    const { props } = setup();
    props.activeItem = 'artists';
    const wrapper = shallow(<ListData {...props} />);
    expect(wrapper).toMatchSnapshot();
  })

  it('should render correctly for no data view', () => {
    const { props } = setup();
    props.movies = [];
    const wrapper = shallow(<ListData {...props} />);
    expect(wrapper).toMatchSnapshot();
  })
})