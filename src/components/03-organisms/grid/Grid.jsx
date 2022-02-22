import React from 'react';
import bem from '../../_utils/bem';
import Card from '../../02-molecules/Card/Card';

const Grid = ({ block = 'AM-grid', items }) => (
  <div className={bem(block)}>
    <div className={bem(block, 'inner')}>
      <div className={bem(block, 'content')}>
        {items.map(({ image, heading, buttons }) => (
          <Card
            image={image}
            heading={heading}
            buttons={buttons}
          />
        ))}
      </div>
    </div>
  </div>
);

export default Grid;