import React, { useState } from 'react';

export default function Select() {
  const [city, setCity] = useState('-- Chọn thành phố --');

  const cities = [
    '-- Chọn thành phố --',
    'Ha Noi',
    'Ha Nam',
    'Ninh Binh',
    'Thanh Hoa',
    'Nghe An'
  ];

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <div style={{
        backgroundColor:"yellow",
        padding: "20px",
        marginTop: "30px"
    }}>
      <div>
        <label>Thanh pho: </label>
        <select value={city} onChange={handleChange}>
          {cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
      <p>{city}</p>
    </div>
  );
}