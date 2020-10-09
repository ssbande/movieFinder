import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Header, Image } from 'semantic-ui-react';
import { createImageUrl } from '../utils/helpers';

const MovieDetail = ({ detailInfo }) => {
  const { poster_path, title, overview, genres } = detailInfo;

  return <Grid stackable stretched>
    <Grid.Column width={5}>
      <Image className="posterImage" centered src={createImageUrl(poster_path)} size='medium' bordered />
    </Grid.Column>
    <Grid.Column width={11}>
      <div>
        <Header size='huge' color='yellow' inverted dividing>{title}</Header>
        <div>{overview}</div>
        <Header as='h3' inverted color='grey'>
          Genres
        <Header.Subheader>{genres.map(genre => (genre.name)).join(', ')}</Header.Subheader>
        </Header>
      </div>
    </Grid.Column>
  </Grid>
}

MovieDetail.propTypes = {
  detailInfo: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string
    }))
  })
}

export default MovieDetail;