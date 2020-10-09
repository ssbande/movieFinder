import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';

import ShowDetail from './ShowDetails';
import ShowCast from './ShowCast';
import { getDetails } from '../state/actions';
import { getDetailInfo } from '../state/selectors';
import { HistoryProps } from '../utils/propTypes';

const Shows = props => {
  const { showId } = useParams();
  const { getDetails, detailInfo, history, category } = props;

  useEffect(() => { getDetails(category, showId) }, [getDetails, category, showId]);
  
  const handleCardClick = id => history.push(`../artists/${id}`);

  const renderDetails = () => {
    const { credits: { cast } } = detailInfo
    return <Container>
      <ShowDetail detailInfo={detailInfo}/>
      <ShowCast cast={cast} handleCardClick={handleCardClick}/>
    </Container>
  }

  return <div>
    {!detailInfo
      ? <div>Loading... </div>
      : renderDetails()
    }
  </div>
}

Shows.propTypes = {
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

export default withRouter(connect(mapState, mapDispatchToProps)(Shows));