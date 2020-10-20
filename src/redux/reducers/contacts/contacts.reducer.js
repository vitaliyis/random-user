import {
  GET_DATA,
  IS_LOADING,
  SET_CURRENT_PAGE,
  SET_ERROR, SET_FILTER_FULL_NAME,
  SET_QUANTITY_PAGE, SET_SORT,
  TOGGLE_VIEW_TABLE
} from "./contacts.types";
import {NORMAL} from "../../../constans/constans";

const initialState = {
  dataOriginal: [],
  data: [],
  viewTable: true,
  isLoading: false,
  pagination: {
    quantityPage: null,
    currentPage: 1,
    sizePage: 50
  },
  error: '',
  sort: NORMAL,
  filter: {
    fullName: '',
    gender: '',
    nationality: ''
  }
}

const contactsReducer = (state = initialState, action) => {
  const {payload} = action
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        data: payload,
        dataOriginal: payload
      }

    case TOGGLE_VIEW_TABLE:
      return {
        ...state,
        viewTable: payload
      }

    case IS_LOADING:
      return {
        ...state,
        isLoading: payload
      }

    case SET_QUANTITY_PAGE:
      return {
        ...state,
        pagination: {...state.pagination, quantityPage: payload}
      }

    case SET_CURRENT_PAGE:
      return {
        ...state,
        pagination: {...state.pagination, currentPage: payload}
      }

    case SET_ERROR:
      return {
        ...state,
        error: payload
      }

    case SET_SORT:
      return {
        ...state,
        sort: payload
      }

    case SET_FILTER_FULL_NAME:
      return {
        ...state,
        filter: {...state.filter, ...payload}
      }

    default:
      return state
  }
}

export default contactsReducer;