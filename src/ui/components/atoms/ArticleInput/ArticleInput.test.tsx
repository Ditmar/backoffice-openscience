import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ArticleInput from './ArticleInput';

describe('ArticleInput', () => {
  it('calls the onChange function when text is entered', () => {
    let articleInput = '';
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      articleInput = event.target.value;
    };

    const { getByPlaceholderText } = render(
      <ArticleInput placeholder="Placeholder text" onChange={onChange} />,
    );

    const input = getByPlaceholderText('Placeholder text');
    fireEvent.change(input, { target: { value: 'Sample Article' } });

    expect(articleInput).toBe('Sample Article');
  });
});
