import classNames from 'classnames';
import type { DisplayProps } from './types/types';
import styles from './display.module.scss';

function Display(props: DisplayProps) {
  const { display, variant } = props;
  const displayClass = classNames(styles.display, {
    [styles.primary]: variant === 'primary',
    [styles.secondary]: variant === 'secondary',
    [styles.tertiary]: variant === 'tertiary',
  });
  return (
    <div role="status" className={displayClass}>
      {display}
    </div>
  );
}
export default Display;
