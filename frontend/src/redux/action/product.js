import axios from "axios";

import {
  CREATE_PRODUCT_ERROR,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCT_ERROR,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_ERROR,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_REQUEST,
  DELETE_PRODUCT_ERROR,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
} from "../constants/product";

// import { toast } from "react-toastify";

const userInfoFromLocalStorage = localStorage.getItem("ecommerceUserInfo")
  ? JSON.parse(localStorage.getItem("ecommerceUserInfo"))
  : null;

  const baseUrl = "http://localhost:4000";

export const createProductAction = (formData) => async (dispatch, state) => {
  // const {
  //   loggedInUser: { user},
  // } = state();
  //1. before the API call
  dispatch({
    type: CREATE_PRODUCT_REQUEST,
  });

  const config = {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${userInfoFromLocalStorage.token}`,
    },
  };

  try {
    //make API call
    const { data } = await axios.post(`${baseUrl}/products`, formData, config);
    //2. after the API call success
    console.log(data, "data");
    dispatch({
      type: CREATE_PRODUCT_SUCCESS,
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
      type: CREATE_PRODUCT_ERROR,
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
      type: GET_PRODUCT_REQUEST,
    });
    // make the call
    const { data } = await axios.get(`${baseUrl}/products`, config);
    console.log(data, "data");
    //if we get here, then request is a success case
    dispatch({
      type: GET_PRODUCT_SUCCESS,
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
      type: GET_PRODUCT_ERROR,
      payload: message,
    });
  }
};

export const getProductsAction = () => async (dispatch, state) => {
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
      type: GET_PRODUCTS_REQUEST,
    });
    // make the call
    const { data } = await axios.get(
      `${baseUrl}/products?id=${userInfoFromLocalStorage.data?._id}`,
      config
    );
    console.log(data, "data");
    //if we get here, then request is a success case
    dispatch({
      type: GET_PRODUCTS_SUCCESS,
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
      type: GET_PRODUCTS_ERROR,
      payload: message,
    });
  }
};

export const deleteProductAction = (id) => async (dispatch, state) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${userInfoFromLocalStorage.token}`,
    },
  };
  try {
    console.log(dispatch, "dispatch");
    dispatch({
      type: DELETE_PRODUCT_REQUEST,
    });
    // make the call
    const { data } = await axios.delete(`${baseUrl}/products/${id}`, config);
    console.log(data, "data");
    //if we get here, then request is a success case
    dispatch({
      type: DELETE_PRODUCT_SUCCESS,
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
      type: DELETE_PRODUCT_ERROR,
      payload: message,
    });
  }
};

export const updateProductAction =
  (id, categoryTitle) => async (dispatch, state) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${userInfoFromLocalStorage.token}`,
      },
    };
    try {
      console.log(dispatch, "dispatch");
      dispatch({
        type: UPDATE_PRODUCT_REQUEST,
      });
      // make the call
      const { data } = await axios.patch(
        `${baseUrl}/products/${id}`,
        { categoryTitle },
        config
      );
      console.log(data, "data");
      //if we get here, then request is a success case
      dispatch({
        type: UPDATE_PRODUCT_SUCCESS,
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
      // toast.error(message);
      dispatch({
        type: UPDATE_PRODUCT_ERROR,
        payload: message,
      });
    }
  };
