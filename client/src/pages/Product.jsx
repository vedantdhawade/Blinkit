import React, { useEffect, useState } from "react";
import SummaryApi from "../common/SummaryApi.js";
import Axios from "../utils/Axios.js";
import ProductCard from "../components/ProductCard.jsx";

const Product = () => {
  const [productData, setproductData] = useState([]);
  const [page, setpage] = useState(1);
  const [loading, setloading] = useState(false);
  const [totalpages, settotalpages] = useState(1);
  const [search, setsearch] = useState("");

  const handleNext = () => {
    if (page !== totalpages) setpage((prev) => prev + 1);
  };

  const handlePrevious = () => {
    if (page > 1) setpage((prev) => prev - 1);
  };

  const handleOnchange = (e) => {
    let value = e.target.value;
    setsearch(value);
    setpage(1);
  };

  useEffect(() => {
    getProducts();
  }, [search]);
  const getProducts = async () => {
    try {
      setloading(true);
      const response = await Axios({
        ...SummaryApi.getProduct,
        data: {
          page: page,
          limit: 12,
          search: search,
        },
      });
      const { data: responsedata } = response;
      if (responsedata.success) {
        setproductData(responsedata.data);
        settotalpages(responsedata.totalpages);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, [page]);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex justify-between items-center p-2 shadow-md bg-slate-100">
        <h1 className="font-semibold">Product</h1>
        <div className="bg-yellow-200 p-1 rounded-md border-none focus-within:border-none">
          <input
            type="text"
            value={search}
            onChange={handleOnchange}
            placeholder="Search"
            className="text-center rounded-md"
          />
        </div>
      </div>
      <div className="container mx-auto py-6 px-4">
        {loading ? (
          <div className="flex items-center justify-center h-96">
            <h1 className="text-center text-lg font-semibold text-gray-700">
              Loading...
            </h1>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {productData.map((curr, index) => (
              <ProductCard key={index} data={curr} />
            ))}
          </div>
        )}
        {!loading && (
          <div className="flex justify-center mt-6 items-center">
            <button
              onClick={handlePrevious}
              disabled={page === 1}
              className={`px-4 py-2 mx-2 border rounded-md ${
                page === 1
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-green-500 text-white hover:bg-green-600"
              }`}
            >
              Previous
            </button>
            <h1 className="text-lg font-semibold mx-2 text-gray-700">
              {page}/{totalpages}
            </h1>
            <button
              onClick={handleNext}
              className="px-4 py-2 mx-2 border rounded-md bg-green-500 text-white hover:bg-green-600"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
