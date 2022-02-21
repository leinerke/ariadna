import React from 'react';
import MainMenu from './MainMenu';
import { items } from '../MenuItems.json';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Menus' };

export const main = () => <MainMenu items={items} />;
