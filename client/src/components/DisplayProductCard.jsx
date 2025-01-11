import React from "react";

const DisplayProductCard = ({ data }) => {
  return (
    <div className="w-40 h-48 rounded-lg shadow-md bg-white border border-yellow-300 p-3 hover:shadow-lg transition-shadow">
      {/* Image Section */}
      <div className="h-2/5 w-full overflow-hidden rounded-lg bg-gray-100">
        <img
          src={data.image[0]}
          alt="Product Image"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="mt-2 h-3/5 flex flex-col justify-between">
        {/* Name */}
        <h3 className="text-sm font-semibold text-[#002D62] truncate">
          {data.name}
        </h3>

        {/* Description */}
        <p className="text-xs text-gray-600 truncate">{data.description}</p>

        {/* Footer: Price and Add Button */}
        <div className="flex items-center justify-between mt-2">
          <span className="text-sm font-bold text-[#002D62]">
            ₹{data.price}
          </span>
          <button className="bg-[#FFB300] hover:bg-[#81D4FA] text-[#002D62] px-2 py-1 rounded-lg text-xs font-semibold transition-colors">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisplayProductCard;
