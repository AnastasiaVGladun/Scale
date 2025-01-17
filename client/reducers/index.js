import {combineReducers} from 'redux'

import auth from './auth'
import fish from './fish'
import rules from './rules'
import stats from './stats'
import locations from './locations'
import diary from './diary'
import achievements from './achievements'
import methods from './methods'
import poacher from './poacher'
import marketplace from './marketplace'
import bird from './bird'
import boat from './boat'
import bird_form from './bird_form'
import obs from './obs'



export default combineReducers({
  auth,
  fish,
  rules,
  stats,
  locations,
  diary,
  achievements,
  poacher,
  marketplace,
  methods,
  bird,
  boat,
  bird_form,
  boat,
  obs
})
