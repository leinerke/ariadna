import React from 'react';
import HeroComponent from './Hero';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Hero' };

const buttons = [
  {
    title: 'Watch Now',
    url: '#',
  },
  {
    title: 'More Info',
    url: '#',
    style: 'secondary',
  },
];

export const Hero = () => (
  <HeroComponent
    image={{
      alt: 'Aquaman',
      src: require('../../../assets/images/banner-aquaman.jpg'),
    }}
    imageMobile={{
      alt: 'Aquaman',
      src: require('../../../assets/images/banner-aquaman-mob.jpg'),
    }}
    heading="Aquaman"
    content="Arthur Curry learns that he is the heir of the underwater kingdom ok Atlantis. This will become Aquaman, the emperor
    of Atlantis, committed to defending the entire planet, both on land and in the seas."
    buttons={buttons}
  />
);
