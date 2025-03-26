import React, { useEffect, useState } from 'react';
import { getProducts, deleteProduct } from './productService';

function ProductList() {
  const [products, setProducts] = useState([]);

  // Бүтээгдэхүүн жагсаалтыг авах
  useEffect(() => {
    async function fetchProducts() {
      const data = await getProducts();
      setProducts(data);
    }

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    const result = await deleteProduct(id);
    if (result) {
      // Устгасны дараа бүтээгдэхүүнүүдийг дахин ачаалах
      const updatedProducts = products.filter((product) => product.id !== id);
      setProducts(updatedProducts);
    }
  };

  return (
    <div>
      <h2>Бүтээгдэхүүнүүд</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}₮
            <button onClick={() => handleDelete(product.id)}>Устгах</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
