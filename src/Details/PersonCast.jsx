import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Header, Card, Image, Icon } from 'semantic-ui-react';

import { createImageUrl, addDefaultSrc } from '../utils/helpers';

const PersonCast = ({ cast, handleCardClick }) => {
  return <div style={{ marginTop: 20 }}>
    <Header size='huge' color='yellow' inverted >Movies & TV</Header>
    <Grid stackable columns={4}>
      {cast.map(film => {
        const { id, media_type, poster_path, title, name, film: filmName, vote_count } = film;
        return (
          <Grid.Column key={id}>
            <Card onClick={() => handleCardClick(id, media_type)} href="">
              <Card.Content>
                <Image
                  onError={addDefaultSrc}
                  size='big'
                  style={{ marginBottom: 10 }}
                  src={createImageUrl(poster_path)}
                />
                <Card.Header>{title || name}</Card.Header>
                <Card.Meta>{filmName}</Card.Meta>
                <Card.Content extra className='flexInline'>
                  <div>
                    <Icon name='thumbs up' />
                    {vote_count}
                  </div>
                  <div>
                    <Icon name='tv' />
                    {media_type.toUpperCase()}
                  </div>
                </Card.Content>
              </Card.Content>
            </Card>
          </Grid.Column>
        )
      })}
    </Grid>
  </div>
}

PersonCast.propTypes = {
  cast: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
    film: PropTypes.string,
    media_type: PropTypes.string,
    vote_count: PropTypes.number
  })),
  handleCardClick: PropTypes.func.isRequired
}

export default PersonCast;