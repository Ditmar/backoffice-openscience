import type { IProps } from './types/IProps';
import styles from './styles.module.scss';

function Button({ children, variant = 'primary' }: IProps) {
  const colorFont = styles[`button-label--${variant}`];

  return (
    <button
      className={`${styles['button-label--container']} ${colorFont}`}
      data-testid="button-styles"
    >
      <span>{children}</span>
    </button>
  );
}

export default Button;
