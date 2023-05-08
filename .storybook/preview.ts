import type { Preview } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../src/styles/global-style';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewports: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone6',
    },
  },
};

export default preview;
