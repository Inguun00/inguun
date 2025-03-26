import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Link компонентыг ашиглана
import ColorList from './ColorList';
import Counter from './Counter';

const Card = ({ name, price, colors, img, addToCart, id }) => {
  const [size, setSize] = useState(1);
  const [selectedColor, setSelectedColor] = useState(colors[0]); // Анхны өнгийг сонгоно

  const decreaseSize = () => {
    if (size > 1) {
      setSize(size - 1);
    }
  };

  const increaseSize = () => {
    setSize(size + 1);
  };

  const handleAddToCart = () => {
    addToCart({ name, price, colors, img, selectedColor, quantity: size });
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4 w-72">
      <div className="w-full h-64">
        <img className="w-full h-full object-cover rounded-lg" src={img} alt={name} />
      </div>
      <h2 className="text-lg font-semibold mt-4">{name}</h2>
      <p className="text-gray-700">Price: ${price.toFixed(2)}</p>

      {/* Өнгөний сонголт */}
      <ColorList colors={colors} selectedColor={selectedColor} setSelectedColor={setSelectedColor} />

      <div className="flex items-center mt-2">
        <Counter size={size} onIncrease={increaseSize} onDecrease={decreaseSize} />
      </div>

      <button
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition w-full"
        onClick={handleAddToCart}
      >
        ADD TO CART
      </button>

      {/* Show Details товч */}
      <Link
        to={`/product/${id}`}  // Энэ газар шинэ хуудас руу шилжинэ
        className="mt-2 text-blue-500 hover:underline"
      >
        Show Details
      </Link>
    </div>
  );
};

export default Card;
