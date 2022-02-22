import React from 'react';
import PropTypes from 'prop-types';
import Image, { imageTypeProps } from '../Image/Image';
import bem from '../../../_utils/bem';

const BackgroundImage = ({ image, imageMobile, children, block = 'background-image' }) => {
  return (
    <div className={bem(block)}>
      {/* Image */}
      <div className={bem(block, 'image')}>
        {image && (
          <Image
            src={image.src}
            alt={image.alt}
            modifiers={imageMobile ? ['desktop'] : []}
          />
        )}
        {imageMobile && (
          <Image
            src={imageMobile.src}
            alt={imageMobile.alt}
            modifiers={['mobile']}
          />
        )}
      </div>
      {/* Content */}
      {children && <div className={bem(block, 'content')}>{children}</div>}
    </div>
  );
};

BackgroundImage.propTypes = {
  outputImage: PropTypes.bool,
  image: imageTypeProps.isRequired,
  imageMobile: imageTypeProps,
  block: PropTypes.string.isRequired,
};

export default BackgroundImage;