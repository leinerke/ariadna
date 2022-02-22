import React from 'react';
import PropTypes from 'prop-types';
import ListItem, { ListItemType } from './ListItem';
import bem, { bemPrototype } from '../../_utils/bem';

const UnorderedList = (
  {
    block = 'ul',
    element = 'item',
    modifiers = [],
    items,
  }) => (
  <ul className={bem(block, null, modifiers)}>
    {items.map(({ content }, index) => (
      <ListItem
        key={index}
        block={block}
        element={element}
        modifiers={modifiers}
      >
        {content}
      </ListItem>
    ))}
  </ul>
);

UnorderedList.propTypes = {
  ...bemPrototype,
  items: PropTypes.arrayOf(PropTypes.shape(ListItemType)).isRequired,
};

export default UnorderedList;