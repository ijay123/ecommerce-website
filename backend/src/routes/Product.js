import express from "express";
import {
  createProduct,
  getProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} from "../controllers/products/Productss.js";
import { createProductSchema } from "../controllers/products/ProductSchema.js";
import { validationMiddleware } from "../middlewares/validation.js";
import { verifyUser } from "../middlewares/verifyUser.js";
import { authorizeUser } from "../middlewares/authorizeUser.js";
const router = express.Router();

router
  .route("/")
  .get(verifyUser, getProducts)
  .post(verifyUser, validationMiddleware(createProductSchema), createProduct);

router
  .route("/:id")
  .get(verifyUser, getProduct)
  .patch(updateProduct)
  .delete(verifyUser, authorizeUser(["regular", "admin"]), deleteProduct);

export default router;
