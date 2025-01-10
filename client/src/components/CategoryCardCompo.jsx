import React, { useEffect, useState } from "react";
import Axios from "../utils/Axios";
import SummaryApi from "../common/SummaryApi";
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
    <div>
      {productData.map((p, index) => {
        return <div>{p.name}</div>;
      })}
    </div>
  );
};

export default CategoryCardCompo;
