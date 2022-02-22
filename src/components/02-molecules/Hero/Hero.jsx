import React from 'react';
import PropTypes from 'prop-types';
import bem from '../../_utils/bem';
import BackgroundImage from '../../01-atoms/images/BackgroundImage/BackgroundImage';
import { imageTypeProps } from '../../01-atoms/images/Image/Image';
import Heading from '../../01-atoms/text/Heading.component';
import Paragraph from '../../01-atoms/text/Paragraph.component';
import Link from '../../01-atoms/links/Link';
import './Hero.scss';

const Hero = ({ block = 'hero', image, imageMobile, heading, content, buttons }) => {
  return (
    <BackgroundImage block={block} image={image} imageMobile={imageMobile}>
      <div className={bem(block, 'content-inner')}>
        {heading && (
          <Heading level="2" block={block} element="heading">
            {heading}
          </Heading>
        )}
        <Paragraph>{content}</Paragraph>
        <div className={bem(block, 'buttons')}>
          {buttons.map(({ url, style, title }) => (
            <Link url={url} block="button" modifiers={style ? [style] : []}>{title}</Link>
          ))}
        </div>
      </div>
    </BackgroundImage>
  );
};

Hero.propTypes = {
  block: PropTypes.string,
  image: imageTypeProps.isRequired,
  heading: PropTypes.string,
  content: PropTypes.element.isRequired,
  buttons: PropTypes.array.isRequired,
};

export default Hero;
