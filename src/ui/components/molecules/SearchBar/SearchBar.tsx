import React from 'react';
import styles from './SearchBar.module.scss';
import type { IProps } from './types/IProps';
import InputField from '../../atoms/InputField/InputField';
import MagnifyingGlass from '../../atoms/MagnifyingGlass/MagnifyingGlass';
import searchIcon from '../../../../assets/icons/search.svg?raw';

function SearchBar({ placeholder, onChange, onSearchClick }: IProps) {
  return (
    <div className={styles.searchBar}>
      <InputField className={styles.inputField} placeholder={placeholder} onChange={onChange} />
      <MagnifyingGlass
        icon={searchIcon}
        onClick={onSearchClick}
        className={styles.magnifyingGlassIcon}
      />
    </div>
  );
}

export default SearchBar;
