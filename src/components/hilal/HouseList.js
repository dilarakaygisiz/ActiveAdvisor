import React, { useContext } from 'react';
import { HouseContext } from './HouseContext';
import House from './House';
import { Link } from 'react-router-dom';
import { ImSpinner2 } from 'react-icons/im';

const HouseList = () => {
  const { houses, loading } = useContext(HouseContext);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <ImSpinner2 className="animate-spin text-4xl" style={{ color: '#6be619' }} />
        <p style={{ color: '#3B5B5D', marginLeft: '.5rem' }}>Loading...</p>
      </div>
    );
  }

  if (houses.length < 1) {
    return <div style={{ textAlign: 'center', 'marginTop': '2rem' }} className="text-center mt-8">Sorry, no properties found.</div>;
  }

  return (
    <section style={{ marginBottom: '5rem' }}>
      <div style={{ margin: "0 auto" }} className="container mx-auto">
        <div>
          {houses.map((house) => (
            <Link to={`/property/${house.id}`} key={house.id}>
              <House house={house} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HouseList;
