import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import FormSiteConfig from './FormSiteConfig';

describe('FormSiteConfig Component', () => {
  it('renders all form fields with correct placeholders', () => {
    render(
      <FormSiteConfig onChange={() => {}} data={[{ label: 'Test Label', data: 'Test Data' }]} />,
    );
    expect(screen.getByPlaceholderText('Enter your site title')).not.toBeNull();
    expect(screen.getByPlaceholderText('Enter your default language')).not.toBeNull();
    expect(screen.getByPlaceholderText('Enter your default author')).not.toBeNull();
    expect(screen.getByPlaceholderText('Enter your default email')).not.toBeNull();
    expect(screen.getByPlaceholderText('Enter your taxonomy types')).not.toBeNull();
  });

  it('allows user to input values in the fields', () => {
    render(
      <FormSiteConfig onChange={() => {}} data={[{ label: 'Test Label', data: 'Test Data' }]} />,
    );

    const siteTitleInput = screen.getByPlaceholderText('Enter your site title');
    const defaultLanguageInput = screen.getByPlaceholderText('Enter your default language');
    const defaultAuthorInput = screen.getByPlaceholderText('Enter your default author');
    const defaultEmailInput = screen.getByPlaceholderText('Enter your default email');
    const taxonomyTypesInput = screen.getByPlaceholderText('Enter your taxonomy types');

    fireEvent.change(siteTitleInput, { target: { value: 'www.test.com' } });
    fireEvent.change(defaultLanguageInput, { target: { value: 'en' } });
    fireEvent.change(defaultAuthorInput, { target: { value: 'testauthor' } });
    fireEvent.change(defaultEmailInput, { target: { value: 'testauthor@gmail.com' } });
    fireEvent.change(taxonomyTypesInput, { target: { value: 'testtype' } });

    expect((siteTitleInput as HTMLInputElement).value).toBe('www.test.com');
    expect((defaultLanguageInput as HTMLInputElement).value).toBe('en');
    expect((defaultAuthorInput as HTMLInputElement).value).toBe('testauthor');
    expect((defaultEmailInput as HTMLInputElement).value).toBe('testauthor@gmail.com');
    expect((taxonomyTypesInput as HTMLInputElement).value).toBe('testtype');
  });

  it('render the correct buttons', () => {
    render(
      <FormSiteConfig onChange={() => {}} data={[{ label: 'Test Label', data: 'Test Data' }]} />,
    );

    const editModelButton = screen.getByText('Edit the model');
    const configureViewButton = screen.getByText('Configure the view');

    // Verificar que los botones se rendericen correctamente
    expect(editModelButton).not.toBeNull();
    expect(configureViewButton).not.toBeNull();

    // Simular click en los botones
    fireEvent.click(editModelButton);
    fireEvent.click(configureViewButton);

    // Verificar que los botones tengan los textos correctos
    expect(editModelButton.textContent).toBe('Edit the model');
    expect(configureViewButton.textContent).toBe('Configure the view');
  });
});
