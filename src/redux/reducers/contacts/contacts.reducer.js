import {
  GET_DATA, IS_INITIAL_LOADED,
  IS_LOADING,
  SET_CURRENT_PAGE,
  SET_ERROR, SET_FILTER,
  SET_QUANTITY_PAGE, SET_SORT,
  TOGGLE_VIEW_TABLE
} from "./contacts.types";
import {NORMAL} from "../../../constans/constans";

const defaultState = {
  data: [],
  viewTable: true,
  isLoading: false,
  isInitialLoaded: false,
  pagination: {
    currentPage: 1,
  },
  error: '',
  sort: NORMAL,
  filter: {
    fullName: '',
    gender: '',
    nationality: ''
  }
}

const localInitialState = localStorage.getItem('contacts-store');

const initialState = localInitialState ? JSON.parse(localInitialState) : defaultState;

const contactsReducer = (state = initialState, action) => {
  const {payload} = action
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        data: payload
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

    case SET_FILTER:
      return {
        ...state,
        filter: {...state.filter, ...payload}
      }

    case IS_INITIAL_LOADED:
      return {
        ...state,
        isInitialLoaded: payload
      }

    default:
      return state
  }
}

export default contactsReducer;