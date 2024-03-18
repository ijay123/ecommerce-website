import { UPDATE_CART_RESET } from "../constants/cart";
import {
  CREATE_CART_SUCCESS,
  CREATE_CART_REQUEST,
  CREATE_CART_RESET,
  CREATE_CART_CLEAR_ERROR,
  CREATE_CART_ERROR,
  GET_CARTS_CLEAR_ERROR,
  GET_CARTS_REQUEST,
  GET_CARTS_SUCCESS,
  GET_CARTS_RESET,
  GET_CARTS_ERROR,
  UPDATE_CART_REQUEST,
  UPDATE_CART_SUCCESS,
  UPDATE_CART_ERROR,
  UPDATE_CART_CLEAR_ERROR,
  DELETE_CART_REQUEST,
  DELETE_CART_SUCCESS,
  DELETE_CART_RESET,
  DELETE_CART_CLEAR_ERROR,
  DELETE_CART_ERROR,
} from "../constants/cart";

export const registerCartReducer = (
  state = { cart: null, loading: false, error: null, success: false },
  action
) => {
  switch (action.type) {
    case CREATE_CART_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case CREATE_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        cart: action.payload,
      };

    case CREATE_CART_RESET:
      return {
        loading: false,
        success: false,
        cart: null,
        error: null,
      };

    case CREATE_CART_CLEAR_ERROR:
      return {
        ...state,
        error: null,
        loading: false,
      };

    case CREATE_CART_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const getCartReducer = (
  state = { cart: [], loading: false, error: null, success: false },
  action
) => {
  switch (action.type) {
    case GET_CARTS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_CARTS_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        loading: false,
        success: true,
        cart: action.payload,
      };

    case GET_CARTS_RESET:
      return {
        loading: false,
        success: false,
        cart: [],
        error: null,
      };

    case GET_CARTS_CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };

    case GET_CARTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const updateCartReducer = (
  state = { cart: null, loading: false, error: null, success: false },
  action
) => {
  switch (action.type) {
    case UPDATE_CART_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_CART_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        loading: false,
        success: true,
        cart: action.payload,
      };

    case UPDATE_CART_RESET:
      return {
        loading: false,
        success: false,
        cart: null,
        error: null,
      };

    case UPDATE_CART_CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };

    case UPDATE_CART_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const deleteCartReducer = (
  state = { cart: null, loading: false, error: null, success: false },
  action
) => {
  switch (action.type) {
    case DELETE_CART_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case DELETE_CART_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        loading: false,
        success: true,
        cart: action.payload,
      };

    case DELETE_CART_RESET:
      return {
        loading: false,
        success: false,
        cart: null,
        error: null,
      };

    case DELETE_CART_CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };

    case DELETE_CART_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
