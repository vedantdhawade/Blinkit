import React from "react";

const ProductCard = ({ data }) => {
  const { name, image, description, price } = data;

  return (
    <div className="w-auto h-[20rem] rounded-lg shadow-lg overflow-hidden  border border-gray-200 bg-white hover:scale-105 transform transition duration-300">
      {/* Image Section */}
      <div className="h-44 w-full overflow-hidden p-1">
        <img src={image[0]} alt={name} className="w-full h-full object-cover" />
      </div>
      {/* Content Section */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 truncate">{name}</h3>
        <p className="text-sm text-gray-600 mt-2 truncate">{description}</p>
        <div className="flex items-center justify-between mt-4">
          {/* Price */}
          <span className="text-green-600 font-bold text-lg">₹{price}</span>
          {/* Button */}
          <button className="px-4 py-2 text-sm font-semibold text-white bg-green-500 rounded-lg shadow hover:bg-green-600 focus:ring focus:ring-green-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
