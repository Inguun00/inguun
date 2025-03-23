import { useState } from "react";

const Filter = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    name: "",
    color: "",
    minPrice: "",
    maxPrice: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => {
      const updatedFilters = { ...prev, [name]: value };
      onFilterChange(updatedFilters); 
      return updatedFilters;
    });
  };

  return (
    <div className="filter">
    <div className="p-4 bg-green-50 rounded-lg">
      <h2 className="text-xl font-bold">Filter</h2>

      <label className="block mt-2 text-sm font-medium">Name</label>
      <input
        type="text"
        name="name"
        value={filters.name}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />

      <label className="block mt-2 text-sm font-medium">Select Color</label>
      <div className="filter-select">
      <select
        name="color"
        value={filters.color}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      >
        <option value="">All</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
        <option value="purple">Purple</option>
        <option value="black">Black</option>
        <option value="pink">Pink</option>
        <option value="orange">Orange</option>
        <option value="brown">Brown</option>
        <option value="grey">Grey</option>
        <option value="teil">Teil</option>
        <option value="cyan">Cyan</option>
        <option value="magenta">Magenta</option>
        <option value="lime">Lime</option>
        <option value="indigo">Indigo</option>
        
      </select>
      </div>

      <label className="block mt-2 text-sm font-medium">Price</label>
      <div className="flex gap-2">
        <input
          type="number"
          name="minPrice"
          placeholder="Min"
          value={filters.minPrice}
          onChange={handleChange}
          className="w-1/2 p-2 border rounded"
        />
        <input
          type="number"
          name="maxPrice"
          placeholder="Max"
          value={filters.maxPrice}
          onChange={handleChange}
          className="w-1/2 p-2 border rounded"
        />
      </div>
    </div>
    </div>
  );
};

export default Filter;
