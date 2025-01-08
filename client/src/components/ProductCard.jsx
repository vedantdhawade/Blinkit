import React from "react";

const ProductCard = ({ data }) => {
  const { name, image, description } = data;
  return (
    <div className="w-48 sm:w-52 md:w-56 lg:w-60 bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
      <img
        src={image[0]}
        alt={name}
        className="w-full h-32 md:h-36 lg:h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-base font-semibold text-gray-800 truncate">
          {name}
        </h3>
        <p className="text-sm text-gray-600 mt-2 truncate">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
