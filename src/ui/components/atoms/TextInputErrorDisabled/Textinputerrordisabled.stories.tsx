import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import TextInputErrorDisabled from './Textinputerrordisabled';
import type { TextInputErrorDisabledProps } from './types/IProps'; // Importa tus tipos aquí



const meta: Meta<typeof TextInputErrorDisabled> = {
    title: 'Components/Atoms/TextInputErrorDisabled',
    component: TextInputErrorDisabled,
  };
  
  export default meta;
  
  type Story = StoryObj<TextInputErrorDisabledProps>;
  
  export const ErrorWithPlaceholder: Story = {
    args: {
      placeholder: 'Placeholder text',
      errorMessage: 'Error message here',
      variant: 'medium', 
    },
  };
  
  export const ErrorWithInput: Story = {
    args: {
      placeholder: 'User Input Text',
      errorMessage: 'Error message here',
      value: 'User Input Text',
      variant: 'medium',
    },
  };
  
  export const DisabledInput: Story = {
    args: {
      isDisabled: true,
      placeholder: 'Placeholder text',
      variant: 'medium',
    },
  };