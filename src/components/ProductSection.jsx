import React from 'react';
import Card from './card';

const ProductSection = ({ filters = {}, addToCart }) => {
  const products = [
    { id: 1, name: 'Tshirt', price: 19.99, colors: ['red', 'blue', 'green'], picture: 'https://www.pull-in.com/media/catalog/product/t/s/tsh-classicwhite23-1ok1.jpg' },
    { id: 2, name: 'Pants', price: 24.99, colors: ['yellow', 'purple', 'black'], picture: 'https://mobile.yoox.com/images/items/30/30178454OI_14_f.jpg?impolicy=crop&width=387&height=490' },
    { id: 3, name: 'Jordan-1', price: 29.99, colors: ['black', 'pink', 'orange'], picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwV-q3xMu4EQfA4K9K6EzTh_w4pMJMJTUDVw&s' },
    { id: 4, name: 'Jacket', price: 15.99, colors: ['brown', 'gray', 'teal'], picture: 'https://th.bing.com/th/id/OIP.bO4pS4CxtlOHb0LsEMiIWwHaIf?w=165&h=189&c=7&r=0&o=5&pid=1.7' },
    { id: 5, name: 'Hoodie', price: 39.99, colors: ['cyan', 'magenta', 'lime', 'indigo'], picture: 'https://perplex.store/cdn/shop/files/1000084-ArmorHoodieBlack_01.jpg?v=1738498805' },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesName = filters.name ? product.name.toLowerCase().includes(filters.name.toLowerCase()) : true;
    const matchesColor = filters.color ? product.colors.some(color => color.toLowerCase() === filters.color.toLowerCase()) : true;
    const matchesMinPrice = filters.minPrice ? product.price >= Number(filters.minPrice) : true;
    const matchesMaxPrice = filters.maxPrice ? product.price <= Number(filters.maxPrice) : true;

    return matchesName && matchesColor && matchesMinPrice && matchesMaxPrice;
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <Card
            key={product.id}
            name={product.name}
            price={product.price}
            colors={product.colors}
            img={product.picture}
            addToCart={addToCart}
            id={product.id}
          />
        ))
      ) : (
        <p className="text-center col-span-full text-gray-500">No products match the filter.</p>
      )}
    </div>
  );
};

export default ProductSection;
