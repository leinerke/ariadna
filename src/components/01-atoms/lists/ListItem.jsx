import React from 'react';
import PropTypes from 'prop-types';
import { bem } from '../../_utils/bem';

const ListItem = (
  {
    block,
    element = 'list-item',
    modifiers,
    children,
  },
) => (
  <li className={bem(block, element, modifiers)}>
    {children}
  </li>
);

const ListItemType = {
  children: PropTypes.node.isRequired,
};

ListItem.propTypes = ListItemType;

export { ListItem, ListItemType };