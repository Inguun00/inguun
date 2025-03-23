import React, { useState } from 'react';

const ColorList = ({ colors }) => {
  const [activeColor, setActiveColor] = useState(null);

  const handleColorClick = (color) => {
    setActiveColor(color); // Set active color on click
  };

  console.log('Colors in ColorList:', colors);  // Debugging line to see the colors passed

  return (
    <div>
      <h3>Available Colors:</h3>
      <div style={{ display: 'flex', gap: '10px' }}>
        {colors && colors.length > 0 ? (
          colors.map((color, index) => (
            <span
              key={index}
              onClick={() => handleColorClick(color)}
              style={{
                cursor: 'pointer',
                width: '30px',
                height: '30px',
                backgroundColor: color,
                borderRadius: '50%',
                border: activeColor === color ? '3px solid #000' : 'none', // Highlight active color with a stronger border
                transition: 'border 0.3s ease', // Smooth transition for color selection
              }}
            />
          ))
        ) : (
          <p>No colors available</p>
        )}
      </div>
    </div>
  );
};

export default ColorList;
