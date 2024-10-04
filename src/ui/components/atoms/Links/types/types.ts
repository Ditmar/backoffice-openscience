// types.ts
import type { ReactNode } from 'react';

export interface LinksProps {
  href: string; // Enlace
  variant:
    | 'Small'
    | 'Normal'
    | 'Big'
    | 'Enabled'
    | 'Hover'
    | 'Focus'
    | 'Active'
    | 'Disabled'
    | 'Visited'; // Variantes de estado
  size?: 'small' | 'medium' | 'large'; // Opcional para especificar el tamaño
  children?: ReactNode; // Permitir que se pase contenido hijo
}
