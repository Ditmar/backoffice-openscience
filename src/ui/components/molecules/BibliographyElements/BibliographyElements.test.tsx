import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import BibliographyElements from './BibliographyElements';

describe('BibliographyElements', () => {
  it('should render the title and the number of entries found', () => {
    render(<BibliographyElements filterFound={10} setFilter={() => {}} />);
    expect(screen.getByText('Bibliographies')).not.toBeNull();
    expect(screen.getByText('10 entries found')).not.toBeNull();
  });
});
