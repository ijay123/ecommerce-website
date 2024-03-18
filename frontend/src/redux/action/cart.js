import axios from "axios";

import {
  CREATE_CART_ERROR,
  CREATE_CART_REQUEST,
  CREATE_CART_SUCCESS,
  GET_CARTS_ERROR,
  GET_CARTS_REQUEST,
  GET_CARTS_SUCCESS,
  GET_CART_ERROR,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  UPDATE_CART_ERROR,
  UPDATE_CART_SUCCESS,
  UPDATE_CART_REQUEST,
  DELETE_CART_ERROR,
  DELETE_CART_REQUEST,
  DELETE_CART_SUCCESS,
} from "../constants/cart";



// import { toast } from "react-toastify";

const userInfoFromLocalStorage = localStorage.getItem("ecommerceUserInfo")
  ? JSON.parse(localStorage.getItem("ecommerceUserInfo"))
  : null;

const baseUrl = "https://ecommerce-backend-sfj2.onrender.com";

export const createCartAction = (formData) => async (dispatch, state) => {
  // const {
  //   loggedInUser: { user},
  // } = state();
  //1. before the API call
  dispatch({
    type: CREATE_CART_REQUEST,
  });

  const config = {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${userInfoFromLocalStorage.token}`,
    },
  };

  try {
    //make API call
    const { data } = await axios.post(`${baseUrl}/cart`, formData, config);
    //2. after the API call success
    console.log(data, "data");
    dispatch({
      type: CREATE_CART_SUCCESS,
      payload: data.data,
    });
    console.log(data);
  } catch (error) {
    //3. after the API call failure
    console.log(error);
    let message =
      error.response && error.response.data.errors
        ? error.response.data.errors.join(",")
        : error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: CREATE_CART_ERROR,
      payload: message,
    });
  }
};

export const getProductAction = () => async (dispatch, state) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${userInfoFromLocalStorage.token}`,
    },
  };
  try {
    console.log(dispatch, "dispatch");
    dispatch({
      type: GET_CART_REQUEST,
    });
    // make the call
    const { data } = await axios.get(`${baseUrl}/cart`, config);
    console.log(data, "data");
    //if we get here, then request is a success case
    dispatch({
      type: GET_CART_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    let message =
      error.response && error.response.data.errors
        ? error.response.data.errors.join(",")
        : error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: GET_CART_ERROR,
      payload: message,
    });
  }
};

export const getCartsAction = () => async (dispatch, state) => {
  const {
    loggedInUser: { user },
  } = state();

  const config = {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${user.token}`,
    },
  };
  try {
    console.log(dispatch, "dispatch");
    dispatch({
      type: GET_CARTS_REQUEST,
    });
    // make the call
    const { data } = await axios.get(
      `${baseUrl}/cart?id=${userInfoFromLocalStorage.data?._id}`,
      config
    );
    console.log(data, "data");
    //if we get here, then request is a success case
    dispatch({
      type: GET_CARTS_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    let message =
      error.response && error.response.data.errors
        ? error.response.data.errors.join(",")
        : error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    // console.log(error, "error");
    // if (message.toLowerCase().includes("jwt")) {
    //   dispatch(logout());
    // }
    dispatch({
      type: GET_CARTS_ERROR,
      payload: message,
    });
  }
};

export const deleteCartAction = (id) => async (dispatch, state) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${userInfoFromLocalStorage.token}`,
    },
  };
  try {
    console.log(dispatch, "dispatch");
    dispatch({
      type: DELETE_CART_REQUEST,
    });
    // make the call
    const { data } = await axios.delete(`${baseUrl}/cart/${id}`, config);
    console.log(data, "data");
    //if we get here, then request is a success case
    dispatch({
      type: DELETE_CART_SUCCESS,
      payload: data.payload,
    });
  } catch (error) {
    let message =
      error.response && error.response.data.errors
        ? error.response.data.errors.join(",")
        : error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    console.log(message, "error");
    dispatch({
      type: DELETE_CART_ERROR,
      payload: message,
    });
  }
};

export const updateCartAction = (id, items) => async (dispatch, state) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${userInfoFromLocalStorage.token}`,
    },
  };
  try {
    console.log(dispatch, "dispatch");
    dispatch({
      type: UPDATE_CART_REQUEST,
    });
    // make the call
    const { data } = await axios.patch(`${baseUrl}/cart/${id}`, items, config);
    console.log(data, "data");
    //if we get here, then request is a success case
    dispatch({
      type: UPDATE_CART_SUCCESS,
      payload: data.payload,
    });
  } catch (error) {
    let message =
      error.response && error.response.data.errors
        ? error.response.data.errors.join(",")
        : error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    console.log(message, "error");

    dispatch({
      type: UPDATE_CART_ERROR,
      payload: message,
    });
  }
};
