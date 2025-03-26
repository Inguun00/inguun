import axios from 'axios';

const API_URL = 'http://localhost:5000/api/products';

// Бүтээгдэхүүн жагсаалт авах
export const getProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};

// Бүтээгдэхүүн нэмэх
export const addProduct = async (productData) => {
  try {
    const response = await axios.post(API_URL, productData);
    return response.data;
  } catch (error) {
    console.error('Error adding product:', error);
  }
};

// Бүтээгдэхүүн устгах
export const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting product:', error);
  }
};
