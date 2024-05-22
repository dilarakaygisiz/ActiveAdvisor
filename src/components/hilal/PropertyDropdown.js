import React, { useState, useEffect, useContext } from 'react';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { Menu } from '@headlessui/react';
import { HouseContext } from './HouseContext';
import GroupsIcon from '@mui/icons-material/Groups';


const PropertyDropdown = () => {
  const { property, setProperty, properties } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);

  
  

  return (
    <Menu as='div' className='dropdown' style={{ position: 'relative' }}>
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className='dropdown-btn'
        style={{ width: '100%', textAlign: 'left' }}
      >
        <GroupsIcon className='dropdown-icon-primary' style={{ color: '#3B5B5D' }} />
        <div>
          <div style={{ fontSize: '15px', fontWeight: 500, lineHeight: '1.25', color: '#3B5B5D' }}>{property}</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className='dropdown-icon-secondry' style={{ color: '#3B5B5D' }} />
        ) : (
          <RiArrowDownSLine className='dropdown-icon-secondry' style={{ color: '#3B5B5D' }} />
        )}
      </Menu.Button>

      <Menu.Items className='app-dropdown-menu'>
        {properties.map((prop, index) => {
          return (
            <Menu.Item
              onClick={() => setProperty(prop)}
              className='dropdown-menu-item'
              as='li'
              key={index}
            >
              {prop}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PropertyDropdown;
