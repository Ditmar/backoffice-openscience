import styles from './TopElements.module.scss';
import type { IProps } from './types/IProps';
import InputField from '../../atoms/InputField/InputField';
import UnifiedButton from './UnifiedButtonProps';

function TopElements({ placeholder, onChange, variant }: IProps) {
  return (
    <div className={styles['top-elements']}>
      <div className={styles['container-text']}>
        <div>
          <h2>Create an entry</h2>
        </div>
        <InputField placeholder={placeholder} onChange={onChange} />
      </div>
      <div className={styles['container-button']}>
        <UnifiedButton variant={variant}>Publish</UnifiedButton>
        <UnifiedButton variant={variant}>Save</UnifiedButton>
      </div>
    </div>
  );
}

export default TopElements;
