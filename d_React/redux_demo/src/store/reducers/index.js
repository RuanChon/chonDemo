import { combineReducers } from 'redux'
import countReducer from './countReducer'
import userInfoReducer from './userInfoReducer'

export const reducer = combineReducers({
  count: countReducer,
  userInfo: userInfoReducer,
})
