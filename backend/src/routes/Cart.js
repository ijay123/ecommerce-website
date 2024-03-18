import express from "express";
import {
  createCart,
  getCart,
  getCarts,
  updateCart,
  deleteCart,
} from "../controllers/added-cart/Cart.js";
import { createCartSchema } from "../controllers/added-cart/CartSchema.js";
import { validationMiddleware } from "../middlewares/validation.js";
import { verifyUser } from "../middlewares/verifyUser.js";
import { authorizeUser } from "../middlewares/authorizeUser.js";
const router = express.Router();

router
  .route("/")
  .get(verifyUser, getCarts)
  .post(verifyUser, validationMiddleware(createCartSchema), createCart);

router
  .route("/:id")
  .get(verifyUser, getCart)
  .patch(updateCart)
  .delete(verifyUser, authorizeUser(["regular", "admin"]), deleteCart);

export default router;
