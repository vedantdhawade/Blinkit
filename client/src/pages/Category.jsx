import React, { useState } from "react";
import UploadCategory from "../components/UploadCategory";

const Category = () => {
  const [addcategory, setaddcategory] = useState(false);
  console.log(addcategory);
  return (
    <section>
      <div className="flex justify-between items-center p-2 shadow-md bg-slate-100">
        <h1 className="font-semibold">Category</h1>
        <button
          className="bg-yellow-200  px-3 py-2 hover:bg-yellow-400"
          onClick={() => setaddcategory(true)}
        >
          Add Category
        </button>
      </div>
      {addcategory && <UploadCategory close={() => setaddcategory(false)} />}
    </section>
  );
};

export default Category;
