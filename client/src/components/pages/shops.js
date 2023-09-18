import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MapPage = () => {
  const [location, setLocation] = useState('');
  const [radius, setRadius] = useState('');
  const [shops, setShops] = useState([]);

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleRadiusChange = (e) => {
    setRadius(e.target.value);
  };

  const handleFindShops = async () => {
    // Assuming you have an API for fetching marijuana shops based on location and radius
    try {
      const response = await fetch(
        `/api/marijuana-shops?location=${location}&radius=${radius}`
      );

      if (response.ok) {
        const data = await response.json();
        setShops(data);
      } else {
        // Handle error here
        console.error('Error fetching marijuana shops');
      }
    } catch (error) {
      // Handle network or other errors here
      console.error('Error:', error);
    }
  };

  return (
    <div className="mapPage">
      <h1>Find Marijuana Shops</h1>
      <div>
        <label htmlFor="locationInput">Location (City or Zip Code):</label>
        <input
          type="text"
          id="locationInput"
          placeholder="Enter location"
          value={location}
          onChange={handleLocationChange}
        />
      </div>
      <div>
        <label htmlFor="radiusInput">Radius (in miles):</label>
        <input
          type="number"
          id="radiusInput"
          placeholder="Enter radius"
          value={radius}
          onChange={handleRadiusChange}
        />
      </div>
      <button onClick={handleFindShops}>Find Shops</button>

      {shops.length > 0 && (
        <div>
          <h2>Found Marijuana Shops:</h2>
          <ul>
            {shops.map((shop, index) => (
              <li key={index}>{shop.name}</li>
            ))}
          </ul>
        </div>
      )}
      <div style={{ marginTop: '5%'}}>
      <Link className='btn' to={'/dash'}>Home</Link>
      </div>
      
    </div>
  );
};

export default MapPage;
