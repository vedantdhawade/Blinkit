import { Router } from "express";
import { UploadProduct } from "../controllers/UploadProduct.controller.js";

const router = Router();
router.post("/add-product", UploadProduct);

export default router;
