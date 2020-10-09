import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';

const ListMenu = props => {
  const { activeItem, handleItemClick, menus } = props;

  return <Menu pointing secondary color='teal' className='categoryMenu'>
    {menus.map(item => {
      const [key, data] = item;
      return <Menu.Item key={key}
        name={data.label}
        active={activeItem === data.route}
        onClick={handleItemClick}
      />
    })}
  </Menu>
}

ListMenu.propTypes = {
  activeItem: PropTypes.string.isRequired,
  handleItemClick: PropTypes.func.isRequired,
  menus: PropTypes.array,
}

export default ListMenu;