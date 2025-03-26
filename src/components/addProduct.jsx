import React, { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [colors, setColors] = useState("");

  const handleAddProduct = async () => {
    const productData = {
      name,
      price: parseFloat(price),
      colors: colors.split(","),
    };

    try {
      await axios.post("http://localhost:5000/api/products", productData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      alert("Бүтээгдэхүүн амжилттай нэмэгдлээ");
    } catch (error) {
      console.error("Бүтээгдэхүүн нэмэхэд алдаа гарлаа", error);
    }
  };

  return (
    <div>
      <h2>Бүтээгдэхүүн нэмэх</h2>
      <input
        type="text"
        placeholder="Нэр"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Үнэ"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Өнгө (зураг - red, blue, green)"
        value={colors}
        onChange={(e) => setColors(e.target.value)}
      />
      <button onClick={handleAddProduct}>Нэмэх</button>
    </div>
  );
};

export default AddProduct;
