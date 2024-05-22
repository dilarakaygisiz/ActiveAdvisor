// HouseContextProvider.js
import React, { useState, useEffect, createContext } from 'react';
import { housesData } from '../../data';

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState('Location (select)');
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState('Campus Type (select)');
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('Price Range (select)');
  const [loading, setLoading] = useState(false);
  const [Typetip, setTypetip] = useState('Sports Type (select)');
  const [Typetipies, setTypetipies] = useState([]);

  useEffect(() => {
    const allCountries = housesData.map((house) => house.country);
    const uniqueCountries = ['Location (select)', ...new Set(allCountries)];
    setCountries(uniqueCountries);

    const allProperties = housesData.map((house) => house.type);
    const uniqueProperties = ['Campus Type (select)', ...new Set(allProperties)];
    setProperties(uniqueProperties);

    const allTypetipies = housesData.map((house) => house.typetip);
    const uniqueTypetipies = ['Type (select)', ...new Set(allTypetipies)];
    setTypetipies(uniqueTypetipies);
  }, []);

  useEffect(() => {
    if (!loading) {
      filterHouses();
    }
  }, [country, property, price, Typetip]); // Include Typetip as a dependency

  const filterHouses = () => {
    setLoading(true);

    const minPrice = parseInt(price.split('-')[0]);
    const maxPrice = parseInt(price.split('-')[1]);

    const filteredHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);
      const isDefault = (str) => str.includes('(select)');

      return (
        (isDefault(country) || house.country === country) &&
        (isDefault(Typetip) || house.typetip === Typetip) &&
        (isDefault(property) || house.type === property) &&
        (isDefault(price) || (housePrice >= minPrice && housePrice <= maxPrice))
      );
    });

    setTimeout(() => {
      setLoading(false);
      setHouses(filteredHouses);
    }, 1000);
  };

  const handleClick = () => {
    // Define your click handling logic here
    console.log("Search button clicked");
  };

  return (
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        countries,
        property,
        setProperty,
        Typetip,
        setTypetip,
        Typetipies,
        properties,
        price,
        setPrice,
        houses,
        loading,
        handleClick, // Add handleClick to the context value
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;

