import React from 'react';
import { MobileMenu } from './MobileMenu';
import { items } from '../MenuItems.json';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Menus' };

export const mobile = () => <MobileMenu items={items} />;

