import classNames from 'classnames';
import { Icon } from '../../utils/svg-icons/icons';
import type { IHeaderDraftProps } from './types/IHeaderDraftProps';
import styles from './HeaderDraft.module.scss';

function HeaderDraft({
  icon,
  text,
  variant = 'primary',
  size = 'medium',
  headingLevel = 'h3',
}: IHeaderDraftProps) {
  const headerClass = classNames(styles['header-draft'], {
    [styles[`header-draft--variant-${variant}`]]: variant,
    [styles[`header-draft--size-${size}`]]: size,
  });

  const HeadingTag = headingLevel as keyof JSX.IntrinsicElements;

  return (
    <div className={headerClass}>
      {icon && <Icon src={icon} className={styles['header-draft__icon']} />}
      <HeadingTag className={styles['header-draft__text']}>{text}</HeadingTag>
    </div>
  );
}

export default HeaderDraft;
