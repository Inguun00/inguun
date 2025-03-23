
import React, { useState } from 'react';
import ColorList from './ColorList';
import Counter from './Counter';

const Card = ({ name, price, colors, img }) => {
  const [size, setSize] = useState(1);

  const decreaseSize = () => {
    if (size > 1) {
      setSize(size - 1);
    }
  };

  const increaseSize = () => {
    setSize(size + 1);
  };

  return (
    <div className="product-container">
      <div className="card">
        <img className="card-img" src={img} alt={name} />
        <h2>{name}</h2>
        <p>Price: ${price.toFixed(2)}</p>
        <ColorList colors={colors} />

        <div className="product-size">
          <Counter size={size} onIncrease={increaseSize} onDecrease={decreaseSize} />
        </div>

        <button className="add-to-cart">ADD TO CART</button>
      </div>
    </div>
  );
};

export default Card;