import {combineReducers} from 'redux'
import contactsReducer from "./reducers/contacts/contacts.reducer";

export default combineReducers({
  contacts: contactsReducer
})