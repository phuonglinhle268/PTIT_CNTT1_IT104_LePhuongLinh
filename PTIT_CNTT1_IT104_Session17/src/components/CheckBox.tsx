import React, { useState } from 'react';

export default function Checkbox() {
  const [interested, setInterested] = useState([]);

  const interests = [
    'Di choi',
    'Code',
    'Boi loi',
    'Nhay day'
  ];

  const handleChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setInterested([...interested, value]);
    } else {
      setInterested(interested.filter(item => item !== value));
    }
  };

  return (
    <div style={{
        backgroundColor:"wheat",
        padding: "20px",
        marginTop: "30px"
    }}>
        <div>
        <label>So thich </label>
        {interests.map((interest, index) => (
          <div key={index}>
            <input type="checkbox" value={interest} checked={interested.includes(interest)} onChange={handleChange}/>
            <span> {interest}</span>
          </div>
        ))}
      </div>
      <p>
        So thich: [{interested.join(', ')}]
      </p>
    </div>
  );
}