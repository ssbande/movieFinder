import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';

import constants from '../utils/constants';
import { FilterProps } from '../utils/propTypes';

const Filters = ({ filter, handleFilterChange }) => {
  const refFilters = Object.values(constants.config);

  return (
    <Form.Group inline id='filterForm'>
      <label>Search for </label>
      {refFilters.sort((a, b) => a.order - b.order).map(fltr => {
        const { label, category, order } = fltr;
        return <Form.Radio key={order}
          label={label}
          value={category}
          checked={filter === category}
          onChange={handleFilterChange}
        />
      })}
    </Form.Group>
  )
}

Filters.propTypes = {
  filter: FilterProps,
  handleFilterChange: PropTypes.func.isRequired
}

export default Filters;