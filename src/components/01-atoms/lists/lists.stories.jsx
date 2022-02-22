import React from 'react';
import UnorderedList from './UnorderedList';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Lists' };

export const unorderedList = () => (
  <UnorderedList
    items={[
      { content: 'This is the first item in the ordered list.' },
      { content: 'And here is the item that goes with the label.' },
      { content: 'Here\'s the third item.' },
      { content: 'And here\'s the last item.' },
      { content: 'And here\'s the last item.' },
    ]}
  />
);