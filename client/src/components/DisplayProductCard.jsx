import React from "react";

const DisplayProductCard = ({ data }) => {
  return (
    <div className="w-40 h-[15rem] rounded-lg shadow-md bg-white border border-[#FFB300] p-3 hover:shadow-lg hover:ring-2 hover:ring-[#FFB300] transition-all">
      {/* Image Section */}
      <div className="h-2/5 w-full overflow-hidden rounded-lg bg-gray-100">
        <img
          src={data.image[0]}
          alt="Product Image"
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content Section */}
      <div className="mt-2 h-3/5 flex flex-col justify-between">
        {/* Name */}
        <h3 className="text-sm font-semibold text-[#002D62] truncate">
          {data.name}
        </h3>

        {/* Description */}
        <p className="text-xs text-gray-600 truncate">
          {data.description || "No description available."}
        </p>

        {/* Footer: Price and Add Button */}
        <div className="flex items-center justify-between mt-2">
          <span className="text-sm font-bold text-[#002D62]">
            ₹{data.price}
          </span>
          <button className="bg-[#FFB300] hover:bg-[#81D4FA] text-[#002D62] px-3 py-1 rounded-lg text-xs font-semibold transition-colors">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisplayProductCard;
