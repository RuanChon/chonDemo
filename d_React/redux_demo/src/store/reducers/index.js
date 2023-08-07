import { combineReducers } from "redux"
import countReducer from "./countReducer"

export const reducer = combineReducers({
  count: countReducer,
})
