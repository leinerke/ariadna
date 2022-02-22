import React from 'react';
import PropTypes from 'prop-types';
import SiteHeader from '../../03-organisms/site/SiteHeader/SiteHeader';
import SiteFooter from '../../03-organisms/site/SiteFooter/SiteFooter';
import bem from '../../_utils/bem';
import { menuItemPropType } from '../../02-molecules/menus/MenuItem';
import SlideOver from '../../03-organisms/site/SiteSlide/SlideOver';
import MobileMenu from '../../02-molecules/menus/MobileMenu/MobileMenu';
import Logo from '../../01-atoms/images/Logo/Logo';
import { connect } from 'react-redux';

const Layout = (
  {
    layoutModifiers = [],
    mainBlock = 'main-content',
    mainModifiers = [],
    mainContentModifiers = [],
    menu,
    children,
  },
) => {

  return (
    <div className={bem('layout-container', layoutModifiers)}>
      <SiteHeader menu={menu} />
      {/* //page_system */}
      <div className={bem('main', '', mainModifiers)}>
        <main role="main" className={bem(mainBlock, '', mainContentModifiers)}>
          {children}
        </main>
      </div>
      <SlideOver
        header={<Logo block="slide-over" />}
        body={<MobileMenu items={menu} />}
      />
      <SiteFooter />
    </div>
  );
};

Layout.propTypes = {
  mainBlock: PropTypes.string,
  mainModifiers: PropTypes.arrayOf(PropTypes.string),
  layoutModifiers: PropTypes.arrayOf(PropTypes.string),
  mainContentModifiers: PropTypes.arrayOf(PropTypes.string),
  menu: PropTypes.arrayOf(PropTypes.shape(menuItemPropType)),
  children: PropTypes.node,
};

const mapStateToProps = ({ menu }) => ({ menu });

export default connect(mapStateToProps, null)(Layout);
