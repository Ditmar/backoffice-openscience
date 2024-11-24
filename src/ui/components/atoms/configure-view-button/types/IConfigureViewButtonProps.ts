export interface IConfigureViewButtonProps {
  icon?: string;
  text?: string;
  onClick: () => void;
  variant: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  isBurger?: boolean;
}
