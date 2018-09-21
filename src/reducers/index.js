import { combineReducers } from 'redux-immutable'
import user from './user'
import route from './route'

const createReducer = asyncReducers =>
  combineReducers({ route, user, ...asyncReducers })

export default createReducer
