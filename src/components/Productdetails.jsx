import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const productId = parseInt(id, 10);

  const products = [
    { id: 1, name: 'Tshirt', price: 19.99, colors: ['red', 'blue', 'green'], picture: 'https://www.pull-in.com/media/catalog/product/t/s/tsh-classicwhite23-1ok1.jpg' },
    { id: 2, name: 'Pants', price: 24.99, colors: ['yellow', 'purple', 'black'], picture: 'https://mobile.yoox.com/images/items/30/30178454OI_14_f.jpg?impolicy=crop&width=387&height=490' },
    { id: 3, name: 'Jordan-1', price: 29.99, colors: ['black', 'pink', 'orange'], picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwV-q3xMu4EQfA4K9K6EzTh_w4pMJMJTUDVw&s' },
    { id: 4, name: 'Jacket', price: 15.99, colors: ['brown', 'gray', 'teal'], picture: 'https://th.bing.com/th/id/OIP.bO4pS4CxtlOHb0LsEMiIWwHaIf?w=165&h=189&c=7&r=0&o=5&pid=1.7' },
    { id: 5, name: 'Hoodie', price: 39.99, colors: ['cyan', 'magenta', 'lime', 'indigo'], picture: 'https://perplex.store/cdn/shop/files/1000084-ArmorHoodieBlack_01.jpg?v=1738498805' },
  ];

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <p className="text-center text-red-500">Product not found</p>;
  }

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-xl rounded-2xl space-y-6">
      {/* Image Section */}
      <div className="flex justify-center">
        <img
          className="w-full max-w-sm h-auto object-cover rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
          src={product.picture}
          alt={product.name}
        />
      </div>

      {/* Product Info */}
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-gray-800">{product.name}</h2>
        <p className="text-lg text-gray-700 mt-3">Price: <span className="text-green-600 font-bold">${product.price.toFixed(2)}</span></p>
      </div>

      <div className="text-gray-700 mt-4 space-y-4">
        <p className="text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-900">Available Colors:</h3>
          <div className="flex gap-3 justify-center">
            {product.colors.map((color, index) => (
              <div
                key={index}
                className={`w-8 h-8 rounded-full border-2 transition duration-300 ${
                  color === 'red' ? 'border-red-500' :
                  color === 'blue' ? 'border-blue-500' :
                  color === 'green' ? 'border-green-500' :
                  color === 'black' ? 'border-black' : 'border-gray-300'
                }`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProductDetails;
