import React from 'react';
import PropTypes from 'prop-types';
import MenuItem, { menuItemPropType } from './MenuItem';
import bem from '../../_utils/bem';
import './Menu.scss';

const Menu = ({ block = 'menu', element, modifiers = [], level, items }) => {
  const mods = [].concat(modifiers, level ? ['sub', `sub-${level}`] : []);

  return (
    <ul className={bem(block, element, mods)}>
      {items &&
        items.map(({ title, url, active, style, below }, id) => (
          <MenuItem
            key={id}
            block={block}
            title={title}
            url={url}
            active={active}
            subLinks={below}
            modifiers={mods}
            style={style}
          />
        ))}
    </ul>
  );
};

Menu.propTypes = {
  block: PropTypes.string,
  modifiers: PropTypes.arrayOf(PropTypes.string),
  level: PropTypes.number,
  items: PropTypes.arrayOf({
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    below: PropTypes.arrayOf(PropTypes.shape(menuItemPropType)),
  }),
};

export default Menu;
