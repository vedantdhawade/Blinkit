import React, { useEffect, useState } from "react";
import Axios from "../utils/Axios";
import SummaryApi from "../common/SummaryApi";
import DisplayProductCard from "./DisplayProductCard";
const CategoryCardCompo = ({ id }) => {
  const [loading, setloading] = useState(false);
  const [productData, setProductData] = useState([]);

  const fetchCategorydata = async () => {
    try {
      const response = await Axios({
        ...SummaryApi.getProductByCategories,
        data: {
          categoryid: id,
        },
      });
      setProductData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCategorydata();
  }, []);
  console.log(productData);
  return (
    <>
      {productData.map((p, index) => {
        return <DisplayProductCard data={p} />;
      })}
    </>
  );
};

export default CategoryCardCompo;
