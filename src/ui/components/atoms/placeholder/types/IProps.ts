import React from 'react';

export interface IProps {
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Asegúrate de que esto esté tipado correctamente
}
