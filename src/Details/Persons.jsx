import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, withRouter } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { getDetails } from '../state/actions';
import PersonDetail from './PersonDetails';
import PersonCast from './PersonCast';
import { getDetailInfo } from '../state/selectors';
import constants from '../utils/constants';
import { HistoryProps } from '../utils/propTypes';

const Persons = props => {
  const { artistId } = useParams();
  const { getDetails, detailInfo, history, category } = props;

  useEffect(() => { getDetails(category, artistId) }, [getDetails, category, artistId]);

  const handleCardClick = (id, category) => history.push(`../${constants.categoryRouteMap[category]}/${id}`);

  console.log('detail: ', detailInfo);
  const renderDetails = () => {
    const { combined_credits: { cast } } = detailInfo
    return <Container>
      <PersonDetail detailInfo={detailInfo} />
      <PersonCast cast={cast} handleCardClick={handleCardClick} />
    </Container>
  }

  return <div>
    {!detailInfo
      ? <div>Loading... </div>
      : renderDetails()
    }
  </div>
}

Persons.propTypes = {
  getDetails: PropTypes.func.isRequired,
  history: HistoryProps,
  category: PropTypes.string,
  detailInfo: PropTypes.shape({})
}

const mapDispatchToProps = {
  getDetails: getDetails,
};

const mapState = state => ({
  detailInfo: getDetailInfo(state),
})

export default withRouter(connect(mapState, mapDispatchToProps)(Persons));