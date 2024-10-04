import React from 'react';
import { render, screen } from '@testing-library/react';
import Pagination from './Pagination'; 

describe('Pagination Component', () => {
  test('renders the pagination component with correct text', () => {
    const { getByText } = render(<Pagination currentPage={1} totalPages={15} />);
    expect(getByText('Page 1 of 15')).toBeInTheDocument();
  });

  test('disables previous button on first page', () => {
    const { getByText } = render(<Pagination currentPage={1} totalPages={15} />);
    expect(getByText('<')).toBeDisabled();
  });

  test('disables next button on last page', () => {
    const { getByText } = render(<Pagination currentPage={15} totalPages={15} />);
    expect(getByText('>')).toBeDisabled();
  });

  test('calls onPageChange when next button is clicked', () => {
    const onPageChangeMock = jest.fn();
    const { getByText } = render(
      <Pagination currentPage={1} totalPages={15} onPageChange={onPageChangeMock} />,
    );

    screen.(getByText('>'));
    expect(onPageChangeMock).toHaveBeenCalledWith(2);
  });
});
