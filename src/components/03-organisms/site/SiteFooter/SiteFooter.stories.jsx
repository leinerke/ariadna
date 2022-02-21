import React from 'react';
import SiteFooter from './SiteFooter';
import { items } from '../../../02-molecules/menus/MenuItems.json';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Site' };

export const footer = () => <SiteFooter items={items} />;
