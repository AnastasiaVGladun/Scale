import {combineReducers} from 'redux'

import auth from './auth'
import stats from './stats'
import locations from './locations'
import diary from './diary'

export default combineReducers({
  auth,
  stats,
  locations,
  diary
})
