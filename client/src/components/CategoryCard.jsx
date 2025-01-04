import React from "react";

const CategoryCard = ({ image, title, onDelete, onUpdate }) => {
  return (
    <div className="border rounded-lg p-4 shadow-lg max-w-xs text-center">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-md"
      />
      <h3 className="text-lg font-semibold mt-4">{title}</h3>
      <div className="flex justify-around mt-4">
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={onDelete}
        >
          Delete
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          onClick={onUpdate}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;
