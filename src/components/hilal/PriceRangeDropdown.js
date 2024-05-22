import React, { useState, useEffect, useContext } from 'react';
import { RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { Menu } from '@headlessui/react';
import { HouseContext } from './HouseContext';

const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);
  const prices = [
    { value: 'Price Range (select)' },
    { value: '0-100' },
    { value: '100-200' },
    { value: '200-300' },
  ];
  return (
    <Menu as='div' className='dropdown' style={{ position: 'relative' }}>
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className='dropdown-btn'
        style={{ width: '100%', textAlign: 'left' }}
      >
        <RiWallet3Line className='dropdown-icon-primary' style={{ color: '#3B5B5D' }} />
        <div>
          <div style={{ fontSize: '15px', fontWeight: 500, lineHeight: '1.25', color: '#3B5B5D' }}>{price}</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className='dropdown-icon-secondry' style={{ color: '#3B5B5D' }} />
        ) : (
          <RiArrowDownSLine className='dropdown-icon-secondry' style={{ color: '#3B5B5D' }} />
        )}
      </Menu.Button>

      <Menu.Items className='app-dropdown-menu'>
        {prices.map((price, index) => {
          return (
            <Menu.Item
              onClick={() => setPrice(price.value)}
              className='dropdown-menu-item'
              as='li'
              key={index}
            >
              {price.value}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PriceRangeDropdown;
