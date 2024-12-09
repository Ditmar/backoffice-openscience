export interface IProps {
  label: string;
  onClick?: (event: { count: number; event: MouseEvent }) => void;
  variant?: 'default' | 'primary';
  disabled?: boolean;
  className?: string;
}
