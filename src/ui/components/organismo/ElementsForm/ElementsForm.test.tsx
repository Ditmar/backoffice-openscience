import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ElementsForm from './ElementsForm';

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

describe('ElementForm Component', () => {
  const mockOnConfigure = vi.fn();
  const mockOnEdit = vi.fn();
  const renderComponent = () =>
    render(<ElementsForm onConfigure={mockOnConfigure} onEdit={mockOnEdit} />);

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders correctly with all elements', () => {
    renderComponent();
    expect(screen.getByText('url')).toBeInTheDocument();
    expect(screen.getByTestId('upload-image')).toBeInTheDocument();
    expect(screen.getByTestId('author-management')).toBeInTheDocument();
  });

  it('calls onConfigure and onEdit correctly when buttons are clicked', async () => {
    renderComponent();
    const configureButton = screen.getByText('Configure');
    const editButton = screen.getByText('Edit');
    await userEvent.click(configureButton);
    expect(mockOnConfigure).toHaveBeenCalledTimes(1);
    await userEvent.click(editButton);
    expect(mockOnEdit).toHaveBeenCalledTimes(1);
  });
});
