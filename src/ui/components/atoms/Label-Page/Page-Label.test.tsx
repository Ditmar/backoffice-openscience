import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import PageIndicator from './Page-Label';

describe('PageIndicator component', () => {
  it('renders without crashing', () => {
    render(<PageIndicator currentPage={0} totalPages={0} />);
  });
});
