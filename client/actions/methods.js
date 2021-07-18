import { getAllMethods } from '../apis/method'

export const GET_METHOD = 'GET_METHOD'

const setMethods = (method) => {
  return {
    type: GET_METHOD,
    method
  }
}

export const getMethods = () => {
  return dispatch => {
    return getAllMethods()
      .then(method => {
        return dispatch(setMethods(method))
      })
  }
}