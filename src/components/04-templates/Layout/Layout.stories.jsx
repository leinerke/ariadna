import React from 'react';
import Layout from './Layout';
import { items as menu } from '../../02-molecules/menus/MenuItems.json';
import Placeholder from '../Placeholder/Placeholder';

/**
 * Storybook Definition.
 */
export default { title: 'Template/Layout' };

export const fullwidth = () => (
  <Layout menu={menu}>
    <Placeholder placeholder="Primary Content" />
  </Layout>
);
