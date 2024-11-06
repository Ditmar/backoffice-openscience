import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import UploadImage from './UploadImage';

describe('UploadImage component', () => {
  it('renders without crashing', () => {
    render(<UploadImage />);
  });

  it('displays drag-and-drop message', () => {
    render(<UploadImage />);
    expect(screen.getByText(/Click to add an image or drag and drop/i)).toBeInTheDocument();
  });

  it('handles file drop', () => {
    const { container } = render(<UploadImage />);
    const dropZone = container.querySelector('.uploadZone');

    if (!dropZone) {
      throw new Error('Drop zone not found');
    }

    const file = new File(['dummy content'], 'image.png', { type: 'image/png' });
    fireEvent.drop(dropZone, {
      dataTransfer: { files: [file] },
    });

    const previewImage = screen.getByAltText('Preview');
    expect(previewImage).toBeInTheDocument();
  });

  it('shows error when file size exceeds the limit', () => {
    render(<UploadImage />);
    const input = screen.getByLabelText(/Upload file/i);

    const largeFile = new File(['dummy content'], 'large_image.png', { type: 'image/png' });
    Object.defineProperty(largeFile, 'size', { value: 6 * 1024 * 1024 }); // Simulate 6 MB file size

    fireEvent.change(input, { target: { files: [largeFile] } });

    expect(screen.getByText(/File size exceeds 5 MB limit/i)).toBeInTheDocument();
  });

  it('shows error when the file is not an image', () => {
    render(<UploadImage />);
    const input = screen.getByLabelText(/Upload file/i);

    const nonImageFile = new File(['dummy content'], 'document.pdf', { type: 'application/pdf' });
    fireEvent.change(input, { target: { files: [nonImageFile] } });

    expect(screen.getByText(/Invalid file type. Please select an image./i)).toBeInTheDocument();
  });

  it('displays the selected file name', () => {
    render(<UploadImage />);
    const input = screen.getByLabelText(/Upload file/i);

    const imageFile = new File(['dummy content'], 'image.png', { type: 'image/png' });
    fireEvent.change(input, { target: { files: [imageFile] } });

    expect(screen.getByText('image.png')).toBeInTheDocument();
  });
});
