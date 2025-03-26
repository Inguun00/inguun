import React from "react";

const ColorList = ({ colors, selectedColor, setSelectedColor }) => {
  return (
    <div className="mt-2">
      <h3 className="text-sm text-gray-600">Өнгө сонгох:</h3>
      <div className="flex gap-2 mt-1">
        {colors.map((color, index) => (
          <span
            key={index}
            onClick={() => setSelectedColor(color)}
            className={`w-6 h-6 rounded-full border cursor-pointer transition ${
              selectedColor === color ? "border-black scale-110" : "border-gray-300"
            }`}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorList;
