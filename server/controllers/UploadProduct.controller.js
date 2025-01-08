import ProductModel from "../models/product.model.js";

export const UploadProduct = async (req, res) => {
  const {
    name,
    image,
    category,
    subCategory,
    unit,
    stock,
    price,
    discount,
    description,
  } = req.body;
  try {
    const data = await new ProductModel({
      name,
      image,
      category,
      subCategory,
      unit,
      stock,
      price,
      discount,
      description,
    });
    const dataa = await data.save();
    if (!dataa) {
      res.status(500).json({
        message: "Product Not added",
        success: false,
        error: true,
      });
    }
    res.status(200).json({
      message: "Product Added Successfully",
      success: true,
      error: false,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
      error: true,
    });
  }
};

export const GetProducts = async (req, res) => {
  try {
    let { page, limit, search } = req.body;

    if (!page) {
      page = 1;
    }
    if (!limit) {
      limit = 10;
    }

    const query = search
      ? {
          $text: {
            $search: search,
          },
        }
      : {};
    const skip = (page - 1) * limit;

    const [data, totalcount] = await Promise.all([
      ProductModel.find().sort({ createdAt: -1 }).skip(),
      ProductModel.countDocuments(query),
    ]);

    return res.json({
      message: "Products Data",
      error: false,
      success: true,
      totalCount: totalcount,
      totalpages: Math.ceil(totalcount / limit),
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error in Geting Products",
      error: true,
      success: false,
    });
  }
};
