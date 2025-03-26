import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MarketPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // API-гаас бүтээгдэхүүн авах
    axios.get('http://localhost:5000/api/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      <h1>Market Page</h1>
      <div>
        {products.map(product => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketPage;
