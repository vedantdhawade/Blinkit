import React, { useEffect, useState } from "react";
import UploadSubCategory from "../components/UploadSubCategory";
import toast from "react-hot-toast";
import Axios from "../utils/Axios";
import SummaryApi from "../common/SummaryApi";
import { createColumnHelper } from "@tanstack/react-table";
import Table from "../components/Table";
import { FaPencil } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import UpdateSubCategory from "../components/UpdateSubCategory";

const SubCategory = () => {
  const [addcategory, setaddcategory] = useState(false);
  const [loading, setloading] = useState(false);
  const [subcategories, setsubcategories] = useState([]);
  const columnHelper = createColumnHelper();
  const [update, setupdate] = useState(false);
  const [editdata, seteditdata] = useState({
    _id: "",
  });

  const columns = [
    columnHelper.accessor("name", {
      header: "Name",
    }),
    columnHelper.accessor("image", {
      header: "Image",
      cell: ({ row }) => {
        return (
          <img
            src={row.original.image}
            alt={row.original.name}
            className="w-20 , h-20"
          />
        );
      },
    }),
    columnHelper.accessor("category", {
      header: "Category",
      cell: ({ row }) => {
        return (
          <>
            {row.original.category.map((curr) => {
              return <p key={curr._id}>{curr.name}</p>;
            })}
          </>
        );
      },
    }),
    columnHelper.accessor("_id", {
      header: "Action",
      cell: ({ row }) => {
        return (
          <div className="flex justify-center items-center gap-5 ">
            <button
              className="bg-green-400 p-3 rounded-xl w-20 flex justify-center"
              onClick={() => {
                setupdate(true);
                seteditdata(row.original);
              }}
            >
              <FaPencil size={20} />
            </button>
            <button className="bg-red-400 p-3 rounded-xl w-20 flex justify-center">
              <MdDelete size={20} />
            </button>
          </div>
        );
      },
    }),
  ];

  const getSubcategories = async () => {
    try {
      setloading(true);
      const response = await Axios({
        ...SummaryApi.getSubCategory,
      });
      if (response.data.success) {
        setsubcategories(response.data.data);

        setloading(false);
      }
    } catch (error) {
      toast.error("Not Able to Fetch Sub-Categories");
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    getSubcategories();
  }, []);

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
      <div>
        {loading ? (
          <h1>Loading</h1>
        ) : (
          <div>
            <Table data={subcategories} columns={columns} />
          </div>
        )}
      </div>
      {update && (
        <UpdateSubCategory close={() => setupdate(false)} data={editdata} />
      )}
    </section>
  );
};

export default SubCategory;
