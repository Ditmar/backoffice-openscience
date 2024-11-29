import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import TableComponent from './TableComponent';

describe('TableComponent', () => {
  const mockData = [
    { id: 1, title: 'Test Title 1', visible: true, protected: false, updated: '2024-11-27' },
    { id: 2, title: 'Test Title 2', visible: false, protected: true, updated: '2024-11-28' },
  ];

  it('renders without crashing', () => {
    render(<TableComponent data={mockData} />);
    const table = screen.getByRole('table');
    expect(table).toBeDefined();
  });

  it('renders the table headers correctly', () => {
    render(<TableComponent data={mockData} />);
    const headers = screen.getAllByRole('columnheader');
    const expectedHeaders = ['ID', 'Title', 'Visible', 'Protected', 'Updated'];
    expect(headers.length).toBeGreaterThanOrEqual(expectedHeaders.length);

    expectedHeaders.forEach((header) => {
      expect(screen.getByText(header, { selector: 'thead th' })).toBeDefined();
    });
  });

  it('renders the table body rows correctly', () => {
    render(<TableComponent data={mockData} />);
    const rows = screen.getAllByRole('row');
    expect(rows.length).toBe(3);
    const dataCells = screen.getAllByRole('cell');
    expect(dataCells).toHaveLength(10);
    expect(screen.getByText('1')).toBeDefined();
    expect(screen.getByText('Test Title 1', { selector: 'tbody td' })).toBeDefined();
  });

  it('renders the Yes/No button in the table body', () => {
    render(<TableComponent data={mockData} />);
    const button = screen.getByRole('button', { name: /No/i });
    expect(button).toBeDefined();
  });

  it('renders the toggle button in the table body', () => {
    render(<TableComponent data={mockData} />);

    mockData.forEach(() => {
      const toggles = screen.getAllByLabelText('Toggle');
      toggles.forEach((toggle) => {
        expect(toggle).toBeDefined();
      });
    });
  });
});
