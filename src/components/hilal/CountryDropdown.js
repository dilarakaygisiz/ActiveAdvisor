import React, { useState, useEffect, useContext } from 'react';
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { Menu } from '@headlessui/react';
import { HouseContext } from './HouseContext';

const CountryDropdown = () => {
    const { country, setCountry, countries } = useContext(HouseContext);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Menu as='div' className='dropdown' style={{ position: 'relative' }}>
            <Menu.Button
                onClick={() => setIsOpen(!isOpen)}
                className='dropdown-btn'
                style={{ width: '100%', textAlign: 'left' }}
            >
                <RiMapPinLine className='dropdown-icon-primary' style={{ color: '#3B5B5D' }} />
                <div>
                    <div style={{ fontSize: '15px', fontWeight: 500, lineHeight: '1.25', color: '#3B5B5D' }}>{country}</div>
                </div>
                {isOpen ? (
                    <RiArrowUpSLine className='dropdown-icon-secondry' style={{ color: '#3B5B5D' }} />
                ) : (
                    <RiArrowDownSLine className='dropdown-icon-secondry' style={{ color: '#3B5B5D' }} />
                )}
            </Menu.Button>

            <Menu.Items className='app-dropdown-menu'>
                {countries.map((country, index) => {
                    return (
                        <Menu.Item
                            onClick={() => setCountry(country)}
                            className='dropdown-menu-item'
                            as='li'
                            key={index}
                        >
                            {country}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
};

export default CountryDropdown;
