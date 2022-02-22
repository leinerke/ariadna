import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../../01-atoms/links/Link';
import Logo from '../../../01-atoms/images/Logo/Logo';
import MainMenu from '../../../02-molecules/menus/MainMenu/MainMenu';
import { menuItemPropType } from '../../../02-molecules/menus/MenuItem';
import bem from '../../../_utils/bem';
import './SiteHeader.scss';

const SiteHeader = ({ menu }) => {
  const block = 'header';
  return (
    <header className={bem(block)}>
      <div className={bem(block, 'inner')}>
        <div className={bem(block, 'branding')}>
          <Link modifiers={['logo-link']} url="/">
            <Logo block="header" />
          </Link>
        </div>
        <div className={bem(block, 'menu')}>
          <MainMenu items={menu} />
        </div>
      </div>
    </header>
  );
};

SiteHeader.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.shape(menuItemPropType)),
};

export default SiteHeader;
