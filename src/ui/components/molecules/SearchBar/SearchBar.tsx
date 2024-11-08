import styles from './SearchBar.module.scss';
import type { IProps } from './types/IProps';
import InputField from '../../atoms/InputField/InputField';
import MagnifyingGlass from '../../atoms/MagnifyingGlass/MagnifyingGlass';
import searchIcon from '../../../../assets/icons/search.svg?raw';

function SearchBar({ placeholder, onChange, onSearchClick }: IProps) {
  return (
    <div className={styles.search__bar}>
      <InputField placeholder={placeholder} onChange={onChange} />
      <MagnifyingGlass icon={searchIcon} onClick={onSearchClick} />
    </div>
  );
}

export default SearchBar;
