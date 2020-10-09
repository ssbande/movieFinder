import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';
import { connect } from 'react-redux';

import InitRender from './Init';
import ListData from './ListData';
import ListMenu from './ListMenu';
import {
  getFilter,
  getInitialMenu,
  getMenus,
  getMovies,
  getShows,
  getArtists,
  shouldShowStartScreen
} from '../state/selectors';
import constants from '../utils/constants';
import { FilterProps } from '../utils/propTypes';

import './data.css';

export const Home = props => {
  const { showStart, filter, initMenu, availableMenus, ...restProps } = props;
  const [activeItem, setActiveItem] = useState(initMenu);

  useEffect(() => { setActiveItem(initMenu) }, [initMenu])

  const handleItemClick = (e, { name }) => {
    const menu = Object.values(constants.config).find(item => item.label === name);
    setActiveItem(menu.route);
  }

  return <Container>
    {showStart
      ? <InitRender />
      : (
        <main>
          <ListMenu activeItem={activeItem} handleItemClick={handleItemClick} filter={filter} menus={availableMenus} />
          <ListData activeItem={activeItem} {...restProps} />
        </main>
      )}
  </Container>
}

Home.propTypes = {
  filter: FilterProps,
  movies: PropTypes.array,
  shows: PropTypes.array,
  artists: PropTypes.array,
  showStart: PropTypes.bool.isRequired,
  initMenu: PropTypes.string.isRequired,
  availableMenus: PropTypes.array
}

const mapState = state => ({
  filter: getFilter(state),
  movies: getMovies(state),
  shows: getShows(state),
  artists: getArtists(state),
  showStart: shouldShowStartScreen(state),
  initMenu: getInitialMenu(state),
  availableMenus: getMenus(state),
})

export default connect(mapState)(Home);