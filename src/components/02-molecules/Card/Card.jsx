import React from 'react';
import bem from '../../_utils/bem';
import Image from '../../01-atoms/images/Image/Image';
import Heading from '../../01-atoms/text/Heading';
import Link from '../../01-atoms/links/Link';

const Card = ({ block = 'card', image, heading, buttons }) => (
  <div className={bem(block)}>
    <div className={bem(block, 'inner')}>
      <div className={bem(block, 'image')}>
        <Image
          src={image.src}
          alt={image.alt}
        />
      </div>
      <div className={bem(block, 'content')}>
        <Heading
          level={3}
        >
          {heading}
        </Heading>
        <div className={bem(block, 'buttons')}>
          {buttons.map(({ url, style, title }, key) => (
            <Link key={key} url={url} block="button" modifiers={style ? [style] : []}>{title}</Link>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Card;