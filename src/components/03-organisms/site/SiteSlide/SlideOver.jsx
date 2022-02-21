import React  from 'react';
import PropTypes from 'prop-types';
import { bem } from '../../../_utils/bem';
import { XIcon } from '@heroicons/react/outline';
import './SlideOver.scss';

const SlideOver = ({ modifiers = [], header, body }) => {
  const baseClass = 'slide-over';
  return (
    <div className={bem('slide-over', null, modifiers)}>
      <div className={bem(baseClass, 'wrap')}>
        <div className={bem(baseClass, 'overlay')} />
        <div className={bem(baseClass, 'container')}>
          <div className={bem(baseClass, 'content-wrap')}>
            <div className={bem(baseClass, 'close-button')}>
              <button>
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

export { SlideOver };