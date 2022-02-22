import React from 'react';
import BannerComponent from './Banner';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Banner' };

const slides = [
  {
    image: {
      alt: 'Aquaman',
      src: require('../../../assets/images/banner-aquaman.jpg'),
    },
    imageMobile: {
      alt: 'Aquaman',
      src: require('../../../assets/images/banner-aquaman-mob.jpg'),
    },
    heading: 'Aquaman',
    content: 'Arthur Curry learns that he is the heir of the underwater kingdom ok Atlantis. This will become Aquaman, the emperor of Atlantis, committed to defending the entire planet, both on land and in the seas.',
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
      alt: 'Venom',
      src: require('../../../assets/images/banner-venom.png'),
    },
    imageMobile: {
      alt: 'Venom',
      src: require('../../../assets/images/banner-venom-mob.png'),
    },
    heading: 'Venom',
    content: 'After finding a host body in investigative journalist Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.',
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
      alt: 'Bumblebee',
      src: require('../../../assets/images/banner-bumblebee.jpg'),
    },
    imageMobile: {
      alt: 'Bumblebee',
      src: require('../../../assets/images/banner-bumblebee-mob.jpg'),
    },
    heading: 'Bumblebee',
    content: 'In 1987, teenager Charlie finds what appears to be an ordinary yellow Volkswagen in a junkyard. However, as she restores it, the car transforms into Bumblebee, a small "autobot" who has been sent to Earth in order to establish a base for her kind.',
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

export const Banner = () => (
  <BannerComponent slides={slides} />
);