export const baseUrl = "http://localhost:5000";

const SummaryApi = {
  register: {
    url: "/api/user/register",
    method: "post",
  },
  login: {
    url: "/api/user/login",
    method: "post",
  },
  forgototp: {
    url: "/api/user/forgotpassword",
    method: "put",
  },
  verifyotp: {
    url: "/api/user/verify-forgotpassword-otp",
    method: "put",
  },
  resetpassword: {
    url: "/api/user/reset-password",
    method: "put",
  },
  getUserdetails: {
    url: "/api/user//user-details",
    method: "get",
  },
  logout: {
    url: "/api/user/logout",
    method: "get",
  },
  uploadAvatar: {
    url: "/api/user/upload-avatar",
    method: "put",
  },
  updateuser: {
    url: "/api/user/updatedetails",
    method: "put",
  },
  addCategory: {
    url: "/api/category/add-category",
    method: "post",
  },
  uploadImage: {
    url: "/api/file/upload",
    method: "post",
  },
  getCategories: {
    url: "/api/category/get",
    method: "get",
  },
  updateCategory: {
    url: "/api/category/update",
    method: "put",
  },
  deleteCategory: {
    url: "/api/category/delete",
    method: "delete",
  },
  addSubcategory: {
    url: "/api/subcategory/add-subcategory",
    method: "post",
  },
  getSubCategory: {
    url: "/api/subcategory/get-subcategory",
    method: "get",
  },
  updateSubcategory: {
    url: "/api/subcategory/update-subcategory",
    method: "put",
  },
  deleteSubcategory: {
    url: "/api/subcategory/delete-subcategory",
    method: "delete",
  },
  uploadProduct: {
    url: "/api/product/add-product",
    method: "post",
  },
};

export default SummaryApi;
