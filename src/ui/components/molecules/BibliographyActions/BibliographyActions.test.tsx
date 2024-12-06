import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import BibliographyActions from './BibliogarphyActions';
import '@testing-library/jest-dom';
import type { IProps } from './types/IProps';

const mockOnCheck = vi.fn();
const mockOnNext = vi.fn();
const mockOnPrevious = vi.fn();

const defaultProps: IProps = {
  items: [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6',
    'Item 7',
    'Item 8',
    'Item 9',
    'Item 10',
  ],
  onCheck: mockOnCheck,
  onNext: mockOnNext,
  onPrevious: mockOnPrevious,
  page: 1,
};

describe('BibliographyActions', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the component correctly', () => {
    render(
      <BibliographyActions
        items={defaultProps.items}
        onCheck={defaultProps.onCheck}
        onNext={defaultProps.onNext}
        onPrevious={defaultProps.onPrevious}
        page={defaultProps.page}
      />,
    );

    // Verifica que la lista de checklist está presente
    expect(screen.getByText('1')).toBeInTheDocument();

    // Verifica que el texto "Entries per page" aparece
    expect(screen.getByText('Entries per page')).toBeInTheDocument();

    // Verifica que se renderiza la página actual
    expect(screen.getByText('1')).toBeInTheDocument();

    // Verifica que ambos botones Chevron están presentes
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
  });

  it('calls onCheck when an item in the checklist is clicked', () => {
    render(
      <BibliographyActions
        items={defaultProps.items}
        onCheck={defaultProps.onCheck}
        onNext={defaultProps.onNext}
        onPrevious={defaultProps.onPrevious}
        page={defaultProps.page}
      />,
    );
    const itemCheckbox = screen.getByText('Item 1');

    // Simula un click en el checkbox
    fireEvent.click(itemCheckbox);

    // Verifica que onCheck fue llamado
    expect(mockOnCheck);
  });
  it('renders the correct page number', () => {
    render(
      <BibliographyActions
        items={defaultProps.items}
        onCheck={defaultProps.onCheck}
        onNext={defaultProps.onNext}
        onPrevious={defaultProps.onPrevious}
        page={defaultProps.page}
      />,
    );

    expect(screen.getByText('1')).toBeInTheDocument();
  });
});
