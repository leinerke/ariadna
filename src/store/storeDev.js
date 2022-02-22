import { createStore } from 'redux';
import { reducer } from '../reducers';

const initialState = {
  openMenu: false,
  menu: [
    {
      'title': 'Home',
      'url': '#',
      'active': true,
    },
    {
      'title': 'Categories',
      'url': '#',
    },
    {
      'title': 'My favorites',
      'url': '#',
    },
    {
      'title': 'Sing in',
      'url': '#',
      'style': 'alt',
    },
  ],
  banner: [
    {
      image: {
        alt: 'Aquaman',
        src: require('../assets/images/banner-aquaman.jpg'),
      },
      imageMobile: {
        alt: 'Aquaman',
        src: require('../assets/images/banner-aquaman-mob.jpg'),
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
        src: require('../assets/images/banner-venom.png'),
      },
      imageMobile: {
        alt: 'Venom',
        src: require('../assets/images/banner-venom-mob.png'),
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
        src: require('../assets/images/banner-bumblebee.jpg'),
      },
      imageMobile: {
        alt: 'Bumblebee',
        src: require('../assets/images/banner-bumblebee-mob.jpg'),
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
  ],
  grid: {
    filters: [
      {
        name: 'All',
        active: true,
      },
      {
        name: 'New Release',
        type: 'sort',
        by: 'release',
        active: false,
      },
      {
        name: 'Most Popular',
        type: 'sort',
        by: 'popularity',
        active: false,
      },
      {
        name: 'Trends',
        type: 'filter',
        by: 'trends',
        active: false,
      },
      {
        name: 'My Favorites',
        type: 'filter',
        by: 'favorite',
        active: false,
      },
      {
        name: 'Recommendations',
        type: 'filter',
        by: 'recommended',
        active: false,
      },
    ],
    items: [
      {
        trends: true,
        popularity: 10,
        image: {
          src: require('../assets/images/venom.jpg'),
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
        favorite: true,
        popularity: 9,
        image: {
          src: require('../assets/images/avengers-infinity-war.png'),
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
        trends: true,
        popularity: 20,
        image: {
          src: require('../assets/images/first-man.jpg'),
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
        recommended: true,
        popularity: 30,
        image: {
          src: require('../assets/images/bohemian-rhapsody.jpg'),
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
        trends: true,
        popularity: 2,
        image: {
          src: require('../assets/images/deadpool.png'),
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
    ],
  },
};

const store = createStore(reducer, initialState);

export { store };