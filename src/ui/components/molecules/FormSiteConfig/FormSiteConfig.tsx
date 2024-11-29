import HeaderDraft from 'ui/components/atoms/header-draft/HeaderDraft';
import EditModelButton from 'ui/components/atoms/edit-model-button/EditModelButton';
import ConfigureViewButton from 'ui/components/atoms/configure-view-button/ConfigureViewButton';
import Placeholder from '../../atoms/placeholder/Placeholder';
import type { IProps } from './types/IProps';
import styles from './FormSiteConfig.module.scss';

function FormSiteConfig({ data, onChange }: IProps): JSX.Element {
  return (
    <form className={styles.form__site}>
      <div className={styles.form__group}>
        <div className={styles.form__field}>
          <span className={styles.form__label}>Site Title</span>
          <Placeholder onChange={onChange} placeholder="Enter your site title" />
        </div>
        <div className={styles.form__field}>
          <span className={styles.form__label}>Default Language</span>
          <Placeholder onChange={onChange} placeholder="Enter your default language" />
        </div>
        <div className={styles.form__field}>
          <span className={styles.form__label}>Default Author</span>
          <Placeholder onChange={onChange} placeholder="Enter your default author" />
        </div>
      </div>
      <div className={styles.form__group}>
        <div className={styles.form__field}>
          <span className={styles.form__label}>Default Email</span>
          <Placeholder onChange={onChange} placeholder="Enter your default email" />
        </div>

        <div className={styles.form__field}>
          <span className={styles.form__label}>Taxonomy Types</span>
          <Placeholder onChange={onChange} placeholder="Enter your taxonomy types" />
        </div>

        <div className={styles.form__field}>
          <HeaderDraft
            variant="primary"
            size="large"
            text="Editing draft version"
            icon="period"
            headingLevel="h2"
          />
          <div className={styles.form__editing}>
            <div>
              <ul>
                {data.map(({ data: value, label }) => (
                  <li>
                    <span>{label}</span>
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <EditModelButton
                variant="primary"
                text="Edit the model"
                icon="pencil"
                size="medium"
                onClick={() => {
                  console.log('Edit Model');
                }}
              />
              <ConfigureViewButton
                onClick={() => {
                  console.log('Configure View');
                }}
                variant="primary"
                text="Configure the view"
                isBurger
                size="medium"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default FormSiteConfig;
