import './Links.scss';
import type { IProps } from './types/IProps';

function Links({ children, variant = 'Normal', onClick }: IProps) {
  return (
    <a className={`links links--${variant}`} onClick={onClick} role="link">
      {children}
    </a>
  );
}

export default Links;
