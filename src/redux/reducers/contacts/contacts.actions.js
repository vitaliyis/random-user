import {
  GET_DATA, IS_INITIAL_LOADED,
  IS_LOADING,
  SET_CURRENT_PAGE,
  SET_ERROR, SET_FILTER,
  SET_SORT,
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

export const setInitialLoaded = payload => {
  return {
    type: IS_INITIAL_LOADED,
    payload
  }
}

export const setCurrentPage = payload => {
  return {
    type: SET_CURRENT_PAGE,
    payload
  }
}

export const setError = payload => {
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
    type: SET_FILTER,
    payload
  }
}

export const getDataFromServer = () => dispatch => {
  dispatch(isLoading(true));
    fetchGetData()
      .then(data => {
        if (data.results) {
          dispatch(getData(data.results));
          dispatch(setInitialLoaded(true));
        } else {
          dispatch(setError(`${data.error || data}`));
        }
        dispatch(isLoading(false));
      })
      .catch(err => {
        console.error('err actions => ', err);
        dispatch(setError(err));
      })
}
