import React from 'react';
import GridComponent from './Grid';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Grid' };

const items = [
  {
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
  },
  {
    image: {
      src: require('../../../assets/images/avengers-infinity-war.png'),
      alt: 'Venom',
    },
    heading: 'Avengers infinity war',
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
  },
  {
    image: {
      src: require('../../../assets/images/first-man.jpg'),
      alt: 'Venom',
    },
    heading: 'First man',
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
  },
  {
    image: {
      src: require('../../../assets/images/bohemian-rhapsody.jpg'),
      alt: 'Venom',
    },
    heading: 'Bohemian rhapsody',
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
  },
  {
    image: {
      src: require('../../../assets/images/deadpool.png'),
      alt: 'Venom',
    },
    heading: 'Deadpool',
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
  },
];

export const Grid = () => (
  <GridComponent
    items={items}
  />
);
