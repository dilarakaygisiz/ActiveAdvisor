// TypetipDropdown.js
import React, { useState, useContext } from 'react';
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { Menu } from '@headlessui/react';
import { HouseContext } from './HouseContext';
import { MdOutlineSportsSoccer } from "react-icons/md";

const TypetipDropdown = () => {
  const { Typetip, setTypetip, Typetipies } = useContext(HouseContext);
  console.log(Typetipies);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as='div' className='dropdown' style={{ position: 'relative' }}>
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className='dropdown-btn'
        style={{ width: '100%', textAlign: 'left' }}
      >
        <MdOutlineSportsSoccer className='dropdown-icon-primary' style={{ color: '#3B5B5D' }} />
        <div>
          <div style={{ fontSize: '15px', fontWeight: 500, lineHeight: '1.25', color: '#3B5B5D' }}>{Typetip}</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className='dropdown-icon-secondry' style={{ color: '#3B5B5D' }} />
        ) : (
          <RiArrowDownSLine className='dropdown-icon-secondry' style={{ color: '#3B5B5D' }} />
        )}
      </Menu.Button>

      <Menu.Items className='app-dropdown-menu'>
        {Typetipies.map((Typetip, index) => {
          return (
            <Menu.Item
              onClick={() => setTypetip(Typetip)}
              className='dropdown-menu-item'
              as='li'
              key={index}
            >
              {Typetip}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default TypetipDropdown;
