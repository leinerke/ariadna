import React from 'react';

import Paragraph from './Paragraph';
import Heading from './Heading';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Text' };

const Headings = () => (
  <>
    {[1, 2, 3, 4, 5, 6].map((level) => (
      <Heading level={level}>This is a Header {level} example</Heading>
    ))}
  </>
);

export const paragraph = () => <Paragraph>Here's a test paragraph.</Paragraph>;
export const headings = () => <Headings />;
