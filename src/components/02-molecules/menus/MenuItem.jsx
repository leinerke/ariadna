import React, { useState } from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import { ChevronDownIcon } from '@heroicons/react/outline';
import { Menu } from './Menu';
import { bem } from '../../_utils/bem';

const MenuItem = ({ title, url, active, style, subLinks, block = 'menu', modifiers = [] }) => {
  const [isExpanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded(!isExpanded);
  const expandedModifiers = isExpanded ? ['open'] : [];
  const submenuModifiers = isExpanded ? ['sub-open'] : [];

  console.log(active);
  const mods = [].concat(modifiers, style, active ? ['active'] : [], subLinks ? ['with-sub'] : []);
  return (
    <li className={bem(block, 'item', mods)}>
      <a className={bem(block, 'link', mods)} href={url}>
        {title}
        {subLinks && (
          <span
            className={bem('expand-sub', '', expandedModifiers)}
            onClick={toggleExpanded}
          >
            <ChevronDownIcon />
          </span>
        )}
      </a>
      {subLinks && (
        <div className="submenu-wrap">
          <Menu
            block={block}
            level={1}
            items={subLinks}
            modifiers={submenuModifiers}
          />
        </div>
      )}
    </li>
  );
};

// Defines the menu item shape and then recursively adds the shape to itself as
// an array of subLinks. Export this shape for other components to use.
const menuItemPropType = {
  title: PropTypes.string,
  url: PropTypes.string,
  block: PropTypes.string,
  active: PropTypes.bool,
  modifiers: arrayOf(PropTypes.string),
};
menuItemPropType.subLinks = PropTypes.arrayOf(PropTypes.shape(menuItemPropType));

MenuItem.propTypes = PropTypes.shape(menuItemPropType);

export { MenuItem, menuItemPropType };
