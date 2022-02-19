import React from 'react';
import { Button } from './Button';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Button' };

export const All = () => (
  <>
    <p>
      <Default />
    </p>
    <p>
      <Alt />
    </p>
  </>
);
export const Default = () => <Button>Button Default</Button>;
export const Alt = () => <Button modifiers={['secondary']}>Button Alt</Button>;
