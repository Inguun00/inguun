import React, { useState } from 'react';


const Counter = () => {
  const [size, setSize] = useState(1);

  const increaseSize = () => setSize(size + 1);
  const decreaseSize = () => {
    if (size > 1) setSize(size - 1);
  };

  return (
    <div className="product-size">
      <p>Size</p>
      <div className="size-selector">
        <button onClick={decreaseSize} disabled={size === 1}>-</button>
        <span>{size}</span>
        <button onClick={increaseSize}>+</button>
      </div>
    </div>
  );
};

export default Counter;
