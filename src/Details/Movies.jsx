import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';

import MovieDetail from './MovieDetails';
import MovieCast from './MovieCast';
import { getDetailInfo } from '../state/selectors';
import { getDetails } from '../state/actions';
import { HistoryProps } from '../utils/propTypes';

const Movies = props => {
  const { movieId } = useParams();
  const { getDetails, detailInfo, history, category } = props;

  useEffect(() => { getDetails(category, movieId) }, [getDetails, category, movieId]);
  
  const handleCardClick = id => history.push(`../artists/${id}`);

  const renderDetails = () => {
    const { credits: { cast } } = detailInfo
    return <Container>
      <MovieDetail detailInfo={detailInfo}/>
      <MovieCast cast={cast} handleCardClick={handleCardClick}/>
    </Container>
  }

  return <div>
    {!detailInfo
      ? <div>Loading... </div>
      : renderDetails()
    }
  </div>
}

Movies.propTypes = {
  getDetails: PropTypes.func.isRequired,
  history: HistoryProps,
  category: PropTypes.string,
  detailInfo: PropTypes.shape({})
}

const mapDispatchToProps = {
  getDetails,
};

const mapState = state => ({
  detailInfo: getDetailInfo(state),
})

export default withRouter(connect(mapState, mapDispatchToProps)(Movies));