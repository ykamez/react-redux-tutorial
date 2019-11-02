import { combineReducers } from 'redux'
import move from './mobe'
import square from './square'

export default combineReducers({
  move,
  square
})

