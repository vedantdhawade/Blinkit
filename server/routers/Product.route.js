import { Router } from "express";
import {
  getProductByCategory,
  GetProducts,
  UploadProduct,
} from "../controllers/UploadProduct.controller.js";

const router = Router();
router.post("/add-product", UploadProduct);
router.post("/get-product", GetProducts);
router.post("/get-productBycategory", getProductByCategory);

export default router;
