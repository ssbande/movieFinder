import React from 'react';
import { shallow, mount } from 'enzyme';

import SearchBar from './SearchBar';

const setup = () => ({
  props: {
    getData: jest.fn(),
    setUserQuery: jest.fn(),
    setFilter: jest.fn(),
    setSubmitted: jest.fn(),
    filter: 'all',
    showSuggestions: false,
    userQuery: 'searchString'
  }
})

describe('Search Bar', () => {
  it('should render correctly', () => {
    const { props } = setup();
    const wrapper = shallow(<SearchBar {...props} />);
    expect(wrapper).toMatchSnapshot();
  })

  it('should render correctly for showing suggestions', () => {
    const { props } = setup();
    props.showSuggestions = true;
    const wrapper = shallow(<SearchBar {...props} />);
    expect(wrapper).toMatchSnapshot();
  })

  it('should render correctly for different filters', () => {
    const { props } = setup();
    props.filter = 'movie';
    const wrapper = shallow(<SearchBar {...props} />);
    expect(wrapper).toMatchSnapshot();
  })
})