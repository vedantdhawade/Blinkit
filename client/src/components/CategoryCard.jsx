import React, { useEffect, useState } from "react";
import UpdateCategory from "./UpdateCategory";
import Axios from "../utils/Axios";
import SummaryApi from "../common/SummaryApi";
import toast from "react-hot-toast";

const CategoryCard = ({ image, title, _id }) => {
  const [update, setupdate] = useState(false);
  const [isdelete, setisdelete] = useState(false);

  const Ondelete = async (_id) => {
    const response = await Axios({
      ...SummaryApi.deleteCategory,
      data: { _id },
    });

    if (response.data.success) {
      toast.success(response.data.message);
    }
  };

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
          onClick={() => Ondelete(_id)}
        >
          Delete
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          onClick={() => setupdate(true)}
        >
          Update
        </button>
      </div>
      {update && <UpdateCategory close={() => setupdate(false)} _id={_id} />}
    </div>
  );
};

export default CategoryCard;
