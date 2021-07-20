import { getAllRules } from '../apis/rules'

export const GET_RULES = 'GET_RULES'

const setRules = (rules) => {
  return {
    type: GET_RULES,
    rules
  }
}

export const getRules = () => {
  return dispatch => {
    return getAllRules()
      .then(rules => {
        return dispatch(setRules(rules))
      })
  }
}
