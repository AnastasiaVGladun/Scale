import {combineReducers} from 'redux'

import auth from './auth'
import stats from './stats'
import locations from './locations'

export default combineReducers({
  auth,
  stats,
  locations
})
