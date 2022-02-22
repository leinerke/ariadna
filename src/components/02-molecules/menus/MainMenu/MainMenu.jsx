import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import Menu from '../Menu';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { menuItemPropType } from '../MenuItem';
import bem from '../../../_utils/bem';

const MainMenu = ({ items }) => (
  <nav id="site-navigation" className={bem('navigation', '', ['main'])}>
    <a className={bem('toggle-expand')}>
      <span className={bem('toggle-expand', 'open')}>
        <MenuIcon className={bem('toggle-expand', 'icon')} />
        <span className={bem('toggle-expand', 'text')}>Open menu</span>
      </span>
      <span className={bem('toggle-expand', 'close')}>
        <XIcon className={bem('toggle-expand', 'icon')} />
        <span className={bem('toggle-expand', 'text')}>Close menu</span>
      </span>
    </a>
    <div id="main-nav" className={bem('main-nav')}>
      <Menu modifiers={['main']} items={items} />
    </div>
  </nav>
);

MainMenu.propTypes = {
  items: arrayOf(PropTypes.shape(menuItemPropType)),
};

export default MainMenu;
