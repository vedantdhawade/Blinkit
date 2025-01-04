import { Router } from "express";
import AuthMiddleware from "../middleware/auth.js";
import { CatergoryController } from "../controllers/Category.controller.js";

const router = Router();

router.post("/add-category", AuthMiddleware, CatergoryController);

export default router;
