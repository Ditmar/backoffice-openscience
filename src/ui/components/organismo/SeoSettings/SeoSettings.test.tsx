import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import SeoSettings from './SeoSettings';
import '@testing-library/jest-dom';
import styles from './SeoSettings.module.scss';

vi.mock('../../atoms/UploadImage/UploadImage', () => ({
  default: () => <div data-testid="upload-image" />,
}));

vi.mock('../../molecules/author-management/AuthorManagement', () => ({
  default: ({ onConfigure, onEdit }: { onConfigure: () => void; onEdit: () => void }) => (
    <div data-testid="author-management">
      <button onClick={onConfigure}>Configure</button>
      <button onClick={onEdit}>Edit</button>
    </div>
  ),
}));

describe('SeoSettings Component', () => {
  const mockOnConfigure = vi.fn();
  const mockOnEdit = vi.fn();

  it('renders correctly', () => {
    render(<SeoSettings onConfigure={mockOnConfigure} onEdit={mockOnEdit} />);
    expect(screen.getByText('og_image')).toBeInTheDocument();
    expect(screen.getByTestId('upload-image')).toBeInTheDocument();
    expect(screen.getByTestId('author-management')).toBeInTheDocument();
  });

  it('passes props to AuthorManagement correctly', () => {
    render(<SeoSettings onConfigure={mockOnConfigure} onEdit={mockOnEdit} />);
    const configureButton = screen.getByText('Configure');
    const editButton = screen.getByText('Edit');

    configureButton.click();
    expect(mockOnConfigure).toHaveBeenCalled();

    editButton.click();
    expect(mockOnEdit).toHaveBeenCalled();
  });

  it('applies the correct styles', () => {
    render(<SeoSettings onConfigure={mockOnConfigure} onEdit={mockOnEdit} />);
    const labelElement = screen.getByText('og_image');
    expect(labelElement).toHaveClass(styles.label);
  });
});
