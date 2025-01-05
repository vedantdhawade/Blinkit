import SubCategoryModel from "../models/subCategory.model.js";
export const addSubcategory = async (req, res) => {
  const { name, image, category } = req.body;
  try {
    const categorys = await new SubCategoryModel({
      name,
      image,
      category,
    });
    const save = await categorys.save();
    if (!save) {
      res.status(400).json({
        message: "No Sub-Category Created",
        error: true,
        success: false,
      });
    }

    res.status(200).json({
      message: "SubCategory Created Successfully",
      error: false,
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: true,
      message: error.message,
    });
  }
};

export const GetSubCategory = async (req, res) => {
  try {
    // Populate 'category' field with data from the referenced CategoryModel
    const data = await SubCategoryModel.find().populate("category");

    if (!data.length) {
      return res.status(404).json({
        message: "No Sub-Categories Found",
        success: false,
        error: true,
      });
    }

    res.status(200).json({
      message: "Sub-Categories Fetched Successfully",
      success: true,
      error: false,
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Cannot Fetch Data",
      success: false,
      error: true,
      errorMessage: error.message,
    });
  }
};
