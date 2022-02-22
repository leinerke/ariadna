import React from 'react';
import Slider from 'react-slick';
import bem from '../../_utils/bem';
import Hero from '../Hero/Hero';

const Banner = ({ slides }) => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={bem('banner')}>
      <Slider {...settings}>
        {slides.map(({ image, imageMobile, heading, content, buttons }, key) => (
          <div key={key}>
            <Hero
              image={image}
              imageMobile={imageMobile}
              heading={heading}
              content={content}
              buttons={buttons}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;