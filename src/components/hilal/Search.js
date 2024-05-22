import React, { useContext } from 'react';

import CountryDropdown from './CountryDropdown';
import PropertyDropdown from './PropertyDropdown';
import PriceRangeDropdown from './PriceRangeDropdown';
import TypetipDropdown from './TypetipDropdown';
import { RiSearch2Line } from 'react-icons/ri'
import { HouseContext } from './HouseContext';
import styles from './Search.module.css'

const Search = () => {
  const { handleClick } = useContext(HouseContext)
  return (
    <div className={styles.container}>
      <CountryDropdown />
      <PropertyDropdown />
      <PriceRangeDropdown />
      <TypetipDropdown />
      <button onClick={() => handleClick()} className={styles.btn}>
        <RiSearch2Line style={{ fontSize: '1.5rem', color: '#000000' }} />
      </button>

    </div>
  );
};

export default Search;