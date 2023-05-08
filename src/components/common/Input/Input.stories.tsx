import { Story } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Input } from './Input';
import Theme from '../../../styles/theme';

export default {
  component: Input,
  title: 'Input',
  decorators: [
    (Story: Story) => {
      return (
        <ThemeProvider theme={Theme}>
          <Story />
        </ThemeProvider>
      );
    },
  ],
};

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value);
};

export const Default: React.FC = () => (
  <Input type={'text'} required onChange={handleChange} />
);

export const Password: React.FC = () => (
  <Input type={'password'} onChange={handleChange} />
);

export const CardNumber: React.FC = () => (
  <Input type={'text'} onChange={handleChange} size={4} maxLength={4} />
);

export const CardDate: React.FC = () => (
  <Input type={'text'} placeholder='MM' onChange={handleChange} maxLength={2} />
);
