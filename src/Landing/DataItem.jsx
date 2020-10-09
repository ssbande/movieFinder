import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Card, Icon, Image } from 'semantic-ui-react';

import constants from '../utils/constants';
import { addDefaultSrc } from '../utils/helpers';

const DataItem = ({ item, handleCardClick }) => {
  const {
    id,
    poster_path,
    profile_path,
    title,
    original_title,
    original_name,
    name,
    release_date,
    first_air_date,
    vote_count
  } = item;

  return (
    <Grid.Column key={id} >
      <Card onClick={() => handleCardClick(id)} href="">
        <Image onError={addDefaultSrc} src={`${constants.imageBaseUrl}${poster_path || profile_path}`} alt={original_title} wrapped ui={false} />
        <Card.Content>
          <Card.Header className='breakWord'>{title || original_name || name}</Card.Header>
          <Card.Meta><Icon name='calendar alternate outline' /> {release_date || first_air_date}</Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <div>
            <Icon name='thumbs up' />
            {vote_count}
          </div>
        </Card.Content>
      </Card>
    </Grid.Column>
  )
}

DataItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string,
    profile_path: PropTypes.string,
    title: PropTypes.string,
    original_title: PropTypes.string,
    original_name: PropTypes.string,
    name: PropTypes.string,
    release_date: PropTypes.string,
    first_air_date: PropTypes.string,
    vote_count: PropTypes.number
  }),
  handleCardClick: PropTypes.func.isRequired
}

export default DataItem;