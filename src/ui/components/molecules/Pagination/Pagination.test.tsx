import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Pagination from './Pagination';

describe('Pagination', () => {
  it('renders correctly', () => {
    const { container } = render(<Pagination currentPage={1} totalPages={10} onClick={() => {}} />);
    expect(container.innerHTML).toMatchSnapshot();
  });
});
