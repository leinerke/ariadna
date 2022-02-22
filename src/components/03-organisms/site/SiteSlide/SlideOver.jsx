import React from 'react';
import PropTypes from 'prop-types';
import bem from '../../../_utils/bem';
import { XIcon } from '@heroicons/react/outline';
import { connect } from 'react-redux';
import { closeMenu } from '../../../../actions';

const SlideOver = ({ header, body, openMenu, closeMenu }) => {
  const baseClass = 'slide-over';
  const handleCloseMenu = () => {
    closeMenu();
  };
  return (
    <div className={bem('slide-over', null, openMenu ? ['open'] : [])}>
      <div className={bem(baseClass, 'wrap')}>
        <div onClick={handleCloseMenu} className={bem(baseClass, 'overlay')} />
        <div className={bem(baseClass, 'container')}>
          <div className={bem(baseClass, 'content-wrap')}>
            <div className={bem(baseClass, 'close-button')}>
              <button onClick={handleCloseMenu}>
                <span>Close panel!</span>
                <XIcon />
              </button>
            </div>
            <div className={bem(baseClass, 'content')}>
              <div className={bem(`${baseClass}__content`, 'header')}>
                {header}
              </div>
              <div className={bem(`${baseClass}__content`, 'body')}>
                {body}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SlideOver.prototype = {
  modifiers: PropTypes.arrayOf(PropTypes.string),
  header: PropTypes.node,
  body: PropTypes.node,
};

const mapStateToProps = state => ({
  openMenu: state.openMenu,
});

const mapDispatchToProps = {
  closeMenu,
};

export default connect(mapStateToProps, mapDispatchToProps)(SlideOver);