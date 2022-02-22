import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../src/store';

// GLOBAL CSS
import '../src/components/00-base/base.scss';

export const decorators = [
  Story => (
    <Provider store={store}>
      <Story />
    </Provider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};