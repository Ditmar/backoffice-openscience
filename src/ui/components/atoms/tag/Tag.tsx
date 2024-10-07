import classNames from 'classnames';
import styles from './styles.module.scss';
import type { IProps } from './types/IProps';

function Tag(props: IProps) {
  const { children, variant, onClick } = props;
  const variantClass = classNames(styles.tag, {
    [styles.primary]: variant === 'primary',
    [styles.secondary]: variant === 'secondary',
    [styles.tertiary]: variant === 'tertiary',
  });
  const labelClass = classNames(styles.tag__label);
  const buttonClass = classNames(styles.tag__button);
  return (
    <div className={variantClass}>
      <span className={labelClass}>{children}</span>
      <button className={buttonClass} onClick={onClick}>
        x
      </button>
    </div>
  );
}

export default Tag;
