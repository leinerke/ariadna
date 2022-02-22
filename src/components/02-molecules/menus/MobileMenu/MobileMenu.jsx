import React from 'react';
import bem from '../../../_utils/bem';
import Menu from '../Menu';
import './MobileMenu.scss';
import PropTypes, { arrayOf } from 'prop-types';
import { menuItemPropType } from '../MenuItem';

const MobileMenu = ({ items }) => {
  return (
    <nav id="site-navigation-mobile" className={bem('navigation', '', ['mobile'])}>
      <Menu modifiers={['mobile']} items={items} />
    </nav>
  );
};

MobileMenu.propTypes = {
  items: arrayOf(PropTypes.shape(menuItemPropType)),
};

export default MobileMenu;
