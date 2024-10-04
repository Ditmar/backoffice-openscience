import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Links from './Links'; // Asegúrate de que la importación sea correcta

describe('Links Component', () => {
  it('should render a link with the correct class for Small variant', () => {
    render(
      <Links href="#" variant="Small">
        Small Link
      </Links>,
    );
    const linkElement = screen.getByText(/small link/i);

    // Verifica que la clase Small esté presente
    expect(linkElement.className).toContain('Small'); // Verifica que contiene la clase Small
  });

  it('should render a link with the correct href and class for Normal variant', () => {
    render(
      <Links href="https://example.com" variant="Normal">
        Normal Link
      </Links>,
    );
    const linkElement = screen.getByText(/normal link/i);

    // Verificar el href usando getAttribute
    expect(linkElement.getAttribute('href')).toBe('https://example.com');
    expect(linkElement.className).toContain('Normal'); // Verifica que contiene la clase Normal
  });
});
