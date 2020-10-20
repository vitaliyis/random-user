import {
  GET_DATA,
  IS_LOADING,
  SET_CURRENT_PAGE,
  SET_ERROR, SET_FILTER_FULL_NAME,
  SET_QUANTITY_PAGE, SET_SORT,
  TOGGLE_VIEW_TABLE
} from "./contacts.types";
import {fetchGetData} from "../../../api/api";

export const getData = payload => {
  return {
    type: GET_DATA,
    payload
  }
}

export const toggleViewTable = payload => {
  return {
    type: TOGGLE_VIEW_TABLE,
    payload
  }
}

export const isLoading = payload => {
  return {
    type: IS_LOADING,
    payload
  }
}

export const setQuantityPage = payload => {
  return {
    type: SET_QUANTITY_PAGE,
    payload
  }
}

export const setCurrentPage = payload => {
  return {
    type: SET_CURRENT_PAGE,
    payload
  }
}

const getQuantityPage = data => {
  if (data.length) { return Math.ceil(data.length / 50) }
}

const setError = payload => {
  return {
    type: SET_ERROR,
    payload
  }
}

export const setSort = payload => {
  return {
    type: SET_SORT,
    payload
  }
}

export const setFilter = payload => {
  return {
    type: SET_FILTER_FULL_NAME,
    payload
  }
}

// thunkCreators =======================================================
export const getDataFromServer = () => dispatch => {
  dispatch(isLoading(true))
  fetchGetData()
    .then(data => {
      if (data.results) {
        dispatch(setQuantityPage(getQuantityPage(data.results)));
        dispatch(getData(data.results));
      }
      dispatch(isLoading(false));
    })
    .catch(err => {
      console.log('err actions => ', err);
      dispatch(setError(err));
    })
}