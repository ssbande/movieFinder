import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import NoData from './NoData';
import DataItem from './DataItem';
import { HistoryProps } from '../utils/propTypes';

const ListData = props => {
  const { activeItem, history } = props;
  const selectedData = props[activeItem] || [];

  const handleCardClick = id => history.push(`${activeItem}/${id}`);

  return <Grid stackable columns={4}>
    {!selectedData.length
      ? <NoData />
      : selectedData.map(item => (
        <DataItem key={item.id} item={item} handleCardClick={handleCardClick} />
      ))
    }
  </Grid>
}

ListData.propTypes = {
  activeItem: PropTypes.string.isRequired,
  history: HistoryProps,
  movies: PropTypes.array,
  shows: PropTypes.array,
  artists: PropTypes.array
}

export default withRouter(connect()(ListData));