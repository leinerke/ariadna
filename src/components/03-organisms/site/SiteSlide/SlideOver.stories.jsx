import React from 'react';
import SlideOver from './SlideOver';
import MobileMenu from '../../../02-molecules/menus/MobileMenu/MobileMenu';
import { items as menu } from '../../../02-molecules/menus/MenuItems.json';
import Logo from '../../../01-atoms/images/Logo/Logo';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Site' };

export const SlideOverLeft = () => (
  <SlideOver
    header={<Logo block="slide-over" />}
    body={<MobileMenu items={menu} />}
  />);