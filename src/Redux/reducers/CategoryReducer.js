import {
  ALL_CATEGORIES_REQUEST,
  ALL_CATEGORIES_SUCCESS,
  ALL_CATEGORIES_FAIL,
  ALL_CATEGORIES_CLEAR_ERRORS,
} from "../types-constants/types";

const CategoryReducer = (state = { cateogires: [] }, action) => {
  switch (action.type) {
    case ALL_CATEGORIES_REQUEST:
      return { loading: true, cateogires: [] };

    case ALL_CATEGORIES_SUCCESS:
      return { loading: false, cateogires: action.payload };

    case ALL_CATEGORIES_FAIL:
      return { loading: false, error: action.payload };

    case ALL_CATEGORIES_CLEAR_ERRORS:
      return { ...state, error: null };

    default:
      return state;
  }
};

export default CategoryReducer;
