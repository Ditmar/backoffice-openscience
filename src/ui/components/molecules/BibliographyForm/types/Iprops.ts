import React from 'react';

export interface IFormField {
  id: string;
  name: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IFormProps {
  fields: IFormField[];
}
