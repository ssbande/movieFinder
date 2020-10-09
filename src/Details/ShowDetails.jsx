import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Header, Image } from 'semantic-ui-react';

import { createImageUrl } from '../utils/helpers';

const ShowDetail = ({ detailInfo }) => {
  const { poster_path, name, overview, genres } = detailInfo;

  return <Grid stackable stretched>
    <Grid.Column width={5}>
      <Image className="posterImage" src={createImageUrl(poster_path)} size='medium' bordered />
    </Grid.Column>
    <Grid.Column width={11}>
      <div>
        <Header size='huge' color='yellow' inverted dividing>{name}</Header>
        <div>{overview}</div>
        <Header as='h3' inverted color='grey'>
          Genres
        <Header.Subheader>{genres.map(genre => (genre.name)).join(', ')}</Header.Subheader>
        </Header>
      </div>
    </Grid.Column>
  </Grid>
}

ShowDetail.propTypes = {
  detailInfo: PropTypes.shape({
    poster_path: PropTypes.string,
    name: PropTypes.string,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string
    }))
  })
}

export default ShowDetail;