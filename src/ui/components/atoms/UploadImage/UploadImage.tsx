import React, { useState, useRef } from 'react';
import classNames from 'classnames';
import styles from './UploadImage.module.scss';

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ACCEPTED_FILE_TYPES = ['image/png', 'image/jpeg', 'image/gif'];

function UploadImage() {
  const [image, setImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>('No selected file');
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const processFile = (file: File) => {
    if (file.size > MAX_FILE_SIZE) {
      setError(`File size exceeds ${(MAX_FILE_SIZE / (1024 * 1024)).toFixed(2)} MB limit.`);
      setImage(null);
      setFileName('No selected file');
      return;
    }

    if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
      setError('Invalid file type. Please select a PNG, JPG, or GIF image.');
      setImage(null);
      setFileName('No selected file');
      return;
    }

    setError(null);
    setFileName(file.name);
    setImage(URL.createObjectURL(file));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) processFile(file);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleClick();
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const file = event.dataTransfer.files[0];
    processFile(file);
  };

  return (
    <main>
      <div
        role="button"
        tabIndex={0}
        className={classNames(styles.uploadarea, { [styles.imageSelected]: !!image })}
        onClick={handleClick}
        onKeyPress={handleKeyPress}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        aria-label="Upload image area"
        aria-describedby="upload-instruction"
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/png, image/jpeg, image/gif"
          className="input-field"
          hidden
          onChange={handleFileChange}
        />
        {image ? (
          <img src={image} alt={fileName} />
        ) : (
          <svg
            width="75"
            height="75"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21 6.25C21 5.00725 19.9928 4 18.75 4H5.25C4.00725 4 3 5.00725 
              3 6.25V16.75C3 17.9928 4.00725 19 5.25 19H18.75C19.9928 19 21 17.9928
               21 16.75V6.25ZM18.75 5.5C19.164 5.5 19.5 5.836 19.5 6.25V10.4395L17.5605
                8.5C16.9748 7.91425 16.0252 7.91425 15.4395 8.5L11.25 12.6895L10.0605 
                11.5C9.47475 10.9142 8.52525 10.9142 7.9395 11.5L4.5 14.9395V6.25C4.5 
                5.836 4.836 5.5 5.25 5.5H18.75ZM4.54725 17.0133L9 12.5605L11.25 14.8105L16.5 
                9.5605L19.5 12.5605V16.75C19.5 17.164 19.164 17.5 18.75 17.5H5.25C4.92825 17.5 
                4.6545 17.2975 4.54725 17.0133ZM9 8.5C9 7.672 8.328 7 7.5 7C6.672 7 6 7.672 6
                 8.5C6 9.328 6.672 10 7.5 10C8.328 10 9 9.328 9 8.5Z"
              fill="#131313"
            />
          </svg>
        )}
        {!image && (
          <span id="upload-instruction">
            Click to add an asset or drag and drop one in this area
          </span>
        )}
        {error && <p className={styles.errorMessage}>{error}</p>}
      </div>
    </main>
  );
}

export default UploadImage;
