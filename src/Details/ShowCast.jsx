import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Header, Card, Image } from 'semantic-ui-react';

import { createImageUrl, addDefaultSrc } from '../utils/helpers';

const ShowCast = ({ cast, handleCardClick }) => {
  return <div style={{ marginTop: 20 }}>
    <Header size='huge' color='yellow' inverted >Cast</Header>
    <Grid stackable columns={4}>
      {cast.map(character => {
        const {
          id,
          profile_path,
          name,
          character: characterName
        } = character;

        return (
          <Grid.Column key={id}>
            <Card onClick={() => handleCardClick(id)} href="">
              <Card.Content>
                <Image
                  onError={addDefaultSrc}
                  size='big'
                  style={{ marginBottom: 10 }}
                  src={createImageUrl(profile_path)}
                />
                <Card.Header>{name}</Card.Header>
                <Card.Meta>{characterName}</Card.Meta>
              </Card.Content>
            </Card>
          </Grid.Column>
        )
      })}
    </Grid>
  </div>
}

ShowCast.propTypes = {
  cast: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired, 
    profile_path: PropTypes.string, 
    name: PropTypes.string, 
    character: PropTypes.string
  })), 
  handleCardClick: PropTypes.func.isRequired
}

export default ShowCast;