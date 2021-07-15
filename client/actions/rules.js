import {getRules} from '../apis/rules'

export const SET_RULES = 'SET_RULES'

const setRules = (rules) => {
  return {
    type: SET_RULES,
    rules
  }
}
export const getRules = () => {
  return dispatch => {
    return fetchRules()
      .then(rules => {
        return dispatch(setRules(rules))
      })
  }
}

