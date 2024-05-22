import React from 'react';
import { IoIosPeople } from "react-icons/io";
import { FaDoorOpen } from "react-icons/fa";
import { BiArea } from "react-icons/bi";

const House = ({ house }) => {
  const { image, type, country, address, bedrooms, bathrooms, surface, price, description, name, typetip } = house;
  return (
    <div style={{ boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.6)', marginBottom: '15px', marginTop: '-10px', color: 'black', background: 'white', padding: '20px', borderRadius: '90px .5rem .5rem', width: '100%', }}>
      <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
        <img
          src={image}
          alt=''
          style={{
            marginBottom: '2rem',
            marginRight: '2rem',
            borderRadius: '20%', // Kenarları oval yapmak için
            boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)', // Hafif bir gölgelendirme
          }}
        />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: '1,125rem', fontWeight: 600, color: '#3B5B5D' }}>{name}</div>
          <div style={{ fontSize: '1,125rem', fontWeight: 600, color: '#3B5B5D' }}>{typetip}</div>
          <div style={{ fontWeight: 600 }}>{description}</div>
          <div style={{ display: 'flex', alignItems: "center", fontWeight: 600, color: '#3B5B5D' }}>
            <div style={{ marginRight: '.5rem' }}>
              <IoIosPeople style={{ color: 'rgb(107 114 128)', fontSize: '1.5rem', lineHeight: '2rem' }} />
            </div>
            <div style={{ marginLeft: '4px', fontSize: '0.875rem' }}>{bedrooms}</div>
          </div>
          <div style={{ display: 'flex', alignItems: "center", fontWeight: 600, color: '#3B5B5D' }}>
            <div style={{ marginRight: '.5rem' }}>
              <FaDoorOpen style={{ color: 'rgb(107 114 128)', fontSize: '1.5rem', lineHeight: '2rem' }} />
            </div>
            <div style={{ marginLeft: '4px', fontSize: '0.875rem' }}>{bathrooms}</div>
          </div>
          <div style={{ display: 'flex', alignItems: "center", fontWeight: 600, color: '#3B5B5D' }}>
            <div style={{ marginRight: '.5rem' }}>
              <BiArea style={{ color: 'rgb(107 114 128)', fontSize: '1.5rem', lineHeight: '2rem' }} />
            </div>
            <div style={{ marginLeft: '4px', fontSize: '0.875rem' }}>{surface} </div>
          </div>
        </div>
        <div style={{ position: 'absolute', top: 0, right: 0, padding: '12px', background: "white", borderRadius: "90px 0 0 90px", fontSize: '1.875rem', fontWeight: "600", color: '#3B5B5D', marginTop: '-10px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' }}> ₺ {price} </div>
      </div>
      <div style={{ marginBottom: '1rem', display: 'flex', fontSize: '14px' }}>
        <div style={{ borderRadius: '100px', color: 'black', padding: '0 12px', backgroundColor: '#CBDBDE', marginRight: '8px' }}>{type}</div>
        <div style={{ borderRadius: '100px', color: 'white', padding: '0 12px', backgroundColor: ' #538991' }}>{country}</div>
      </div>
      <div style={{ fontSize: '20px', fontWeight: 600, maxWidth: '260px' }}>{address}</div>
    </div>
  );
};

export default House;
