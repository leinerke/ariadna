import React from 'react';
import CardElement from './Card';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Card' };

const cardData = {
  image: {
    src: require('../../../assets/images/venom.jpg'),
    alt: 'Venom',
  },
  heading: 'Venom',
  buttons: [
    {
      title: 'Watch Now',
      url: '#',
    },
    {
      title: 'More Info',
      url: '#',
      style: 'secondary',
    },
  ],
};

export const Card = () => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      gap: '1rem',
    }}
  >
    <CardElement
      image={cardData.image}
      heading={cardData.heading}
      buttons={cardData.buttons}
    />
  </div>
);
