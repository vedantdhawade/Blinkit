import React, { useState } from "react";
import UploadSubCategory from "../components/UploadSubCategory";
import { useSelector } from "react-redux";

const SubCategory = () => {
  const [addcategory, setaddcategory] = useState(false);

  return (
    <section>
      <div className="flex justify-between items-center p-2 shadow-md bg-slate-100">
        <h1 className="font-semibold">Sub Category</h1>
        <button
          className="bg-yellow-200 px-3 py-2 hover:bg-yellow-400"
          onClick={() => setaddcategory(true)}
        >
          Add Sub Category
        </button>
      </div>
      {addcategory && <UploadSubCategory close={() => setaddcategory(false)} />}
    </section>
  );
};

export default SubCategory;
