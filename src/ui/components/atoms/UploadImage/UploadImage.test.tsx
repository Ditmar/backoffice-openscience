import { describe, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import UploadImage from './UploadImage';

describe('UploadImage component', () => {
  it('renders without crashing', () => {
    render(<UploadImage />);
  });

  it('has an upload area', () => {
    render(<UploadImage />);
    screen.getByRole('button');
  });

  it('shows the correct instruction text when no image is selected', () => {
    render(<UploadImage />);
    screen.getByText('Click to add an asset or drag and drop one in this area');
  });

  it('displays an error message when the file is too large', () => {
    render(<UploadImage />);
    const largeFile = new File([new ArrayBuffer(6 * 1024 * 1024)], 'large-image.jpg', {
      type: 'image/jpeg',
    });
    const input = screen.getByLabelText('Upload image area').querySelector('input[type="file"]');

    if (input) {
      fireEvent.change(input, { target: { files: [largeFile] } });
    }

    screen.getByText('File size exceeds 5.00 MB limit.');
  });

  it('displays an error message when the file is not an accepted type', () => {
    render(<UploadImage />);
    const nonImageFile = new File([new ArrayBuffer(100)], 'text-file.txt', { type: 'text/plain' });
    const input = screen.getByLabelText('Upload image area').querySelector('input[type="file"]');

    if (input) {
      fireEvent.change(input, { target: { files: [nonImageFile] } });
    }

    screen.getByText('Invalid file type. Please select a PNG, JPG, or GIF image.');
  });
});
