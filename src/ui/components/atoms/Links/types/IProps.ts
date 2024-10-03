export interface IProps {
  children?: React.ReactNode;
  onClick?: () => void;
  variant?: 'Small' | 'Normal' | 'Big' | 'Active' | 'Disabled' | 'Visited';
}
