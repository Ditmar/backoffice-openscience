import React from 'react';
import styles from './SearchBar.module.scss';
import type { IProps } from './types/IProps';
import InputField from '../../atoms/InputField/InputField';
import MagnifyingGlass from '../../atoms/MagnifyingGlass/MagnifyingGlass';
import searchIcon from '../../../../assets/icons/search.svg?raw';

function SearchBar({ placeholder, onChange, onSearchClick }: IProps) {
  return (
    <div className={styles.search__bar}>
      <InputField className={styles.input__field} placeholder={placeholder} onChange={onChange} />
      <MagnifyingGlass
        icon={searchIcon}
        onClick={onSearchClick}
        className={styles.magnifying__icon}
      />
    </div>
  );
}

export default SearchBar;
