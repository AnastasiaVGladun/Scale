import {combineReducers} from 'redux'

import auth from './auth'
import fish from './fish'
import rules from './rules'
import stats from './stats'
import locations from './locations'
import diary from './diary'

export default combineReducers({
  auth,
  fish,
  rules,
  stats,
  locations,
  diary
})
