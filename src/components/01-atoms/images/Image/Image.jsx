import React from 'react';
import PropTypes from 'prop-types';
import bem from '../../../_utils/bem';

const Image = ({ modifiers, src, alt, title, children }) => {
  return (
    <>
      <img
        className={bem('image', '', modifiers)}
        src={src}
        alt={alt}
        title={title}
      />
      {children}
    </>
  );
};

export const imageTypeProps = PropTypes.shape({
  modifiers: PropTypes.arrayOf(PropTypes.string),
  src: PropTypes.string,
  srcset: PropTypes.string,
  sizes: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
});

Image.propTypes = imageTypeProps;

export default Image;