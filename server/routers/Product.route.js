import { Router } from "express";
import {
  GetProducts,
  UploadProduct,
} from "../controllers/UploadProduct.controller.js";

const router = Router();
router.post("/add-product", UploadProduct);
router.post("/get-product", GetProducts);

export default router;
