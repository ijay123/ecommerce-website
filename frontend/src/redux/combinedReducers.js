import { combineReducers } from "redux";
import { registerUserReducer } from "./reducers/user";
import { loginUserReducer } from "./reducers/user";
import {
  deleteCategoryReducer,
  getCategoryReducer,
  registerCategoryReducer,
  updateCategoryReducer,
} from "./reducers/category";
import {
  deleteProductReducer,
  getProductsReducer,
  registerProductReducer,
  updateProductReducer,
} from "./reducers/product";
import {
  deleteCartReducer,
  getCartReducer,
  registerCartReducer,
  updateCartReducer,
} from "./reducers/cart";

export const combined = combineReducers({
  createdUser: registerUserReducer,
  loggedInUser: loginUserReducer,
  categories: registerCategoryReducer,
  AllCategories: getCategoryReducer,
  updatedCategory: updateCategoryReducer,
  deletedCategory: deleteCategoryReducer,
  createdProduct: registerProductReducer,
  allProducts: getProductsReducer,
  updateProduct: updateProductReducer,
  deleteProduct: deleteProductReducer,
  createdCart: registerCartReducer,
  getCarts: getCartReducer,
  updateCart: updateCartReducer,
  deleteCart: deleteCartReducer,
});
