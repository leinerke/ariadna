import React from 'react';
import SiteHeader from './SiteHeader';
import { items as menu } from '../../../02-molecules/menus/MenuItems.json';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Site' };

export const header = () => (
  <SiteHeader menu={menu} />
);
