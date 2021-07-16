import {combineReducers} from 'redux'

// import currentPage from './current-page'
import auth from './auth'
import fish from './fish'
import rules from './rules'

export default combineReducers({
  // currentPage,
  auth,
  fish,
  rules
})
