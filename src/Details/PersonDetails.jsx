import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Header, Image } from 'semantic-ui-react';

import { createImageUrl } from '../utils/helpers';

const PersonDetail = ({ detailInfo }) => {
  const { profile_path, name, biography, place_of_birth, birthday } = detailInfo;

  return <Grid stackable stretched>
    <Grid.Column width={5}>
      <Image className="posterImage" src={createImageUrl(profile_path)} size='medium' bordered />
    </Grid.Column>
    <Grid.Column width={11}>
      <div>
        <Header size='huge' color='yellow' inverted dividing>{name}</Header>
        <div>{biography}</div>
        <Header as='h3' inverted color='grey'>
          Place of birth
          <Header.Subheader>{birthday} {place_of_birth}</Header.Subheader>
        </Header>
      </div>
    </Grid.Column>
  </Grid>
}

PersonDetail.propTypes = {
  detailInfo: PropTypes.shape({
    profile_path: PropTypes.string,
    name: PropTypes.string,
    biography: PropTypes.string,
    place_of_birth: PropTypes.string,
    birthday: PropTypes.string
  })
}

export default PersonDetail;