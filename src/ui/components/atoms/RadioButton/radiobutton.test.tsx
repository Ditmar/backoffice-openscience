import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import RadioButton from './radiobutton';
import '@testing-library/jest-dom';

describe('RadioButton Component', () => {
  it('Should render the radio button component', () => {
    render(<RadioButton id="radio-1" label="radio button item" checked={false} />);
    const radioButton = screen.getByLabelText('radio button item');
    expect(radioButton).toBeInTheDocument();
  });

  it('Should be unchecked by default', () => {
    render(<RadioButton id="radio-2" label="radio button item" />);
    const radioButton = screen.getByLabelText('radio button item');
    expect(radioButton).not.toBeChecked();
  });

  it('Should check the radio button when clicked', () => {
    render(<RadioButton id="radio-3" label="radio button item" />);
    const radioButton = screen.getByLabelText('radio button item');
    expect(radioButton).not.toBeChecked();
    fireEvent.click(radioButton);
    expect(radioButton).toBeChecked();
  });

  it('Should not allow checking when disabled', () => {
    render(<RadioButton id="radio-4" label="Disabled radio button" disabled checked={false} />);
    const radioButton = screen.getByLabelText('Disabled radio button');
    expect(radioButton).toBeDisabled();
    fireEvent.click(radioButton);
    expect(radioButton).not.toBeChecked();
  });

  it('Should autofocus the radio button', async () => {
    render(<RadioButton id="radio-5" label="Auto-focus radio button" autoFocus />);
    const radioButton = screen.getByLabelText('Auto-focus radio button');

    await waitFor(() => {
      expect(radioButton).toHaveFocus();
    });
  });
});
