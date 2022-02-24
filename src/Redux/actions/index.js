import axios from "axios";
import {
  ALL_CATEGORIES_REQUEST,
  ALL_CATEGORIES_SUCCESS,
  ALL_CATEGORIES_FAIL,
  ALL_CATEGORIES_CLEAR_ERRORS,
  ALL_CATEGORIES_PRODUCT_CLEAR_ERRORS,
  ALL_CATEGORIES_PRODUCT_FAIL,
  ALL_CATEGORIES_PRODUCT_SUCCESS,
  ALL_CATEGORIES_PRODUCT_REQUEST,
} from "../types-constants/types";

/* export function getcategories() {
  return function (dispatch) {
    return axios
      .get("http://www.clothecom.somee.com/api/category/getallcat")
      .then((response) => {
        // dispatch
        dispatch({
          type: "GETCATEGORIES",
          payload: response.data,
        });
      });
  };
} */

export const getproductsofcategories = (num) => async (dispatch) => {
  try {
    dispatch({ type: ALL_CATEGORIES_PRODUCT_REQUEST });

    const { data } = await axios.get(
      `http://www.clothecom.somee.com/api/Product/ProductsInCategory/${num}`
    );

    dispatch({
      type: ALL_CATEGORIES_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_CATEGORIES_PRODUCT_FAIL,
      payload: error.type,
    });
  }
};

export const getcategories = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_CATEGORIES_REQUEST });

    const { data } = await axios.get(
      "http://www.clothecom.somee.com/api/category/getallcat"
    );
    console.log(data);

    dispatch({
      type: ALL_CATEGORIES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_CATEGORIES_FAIL,
      payload: error.type,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: ALL_CATEGORIES_CLEAR_ERRORS,
  });
};

export const increment = (number) => {
  return {
    type: "INCREMENT",
    payload: number,
  };
};

export const decrement = (number) => {
  return {
    type: "DECREMENT",
    payload: number,
  };
};
