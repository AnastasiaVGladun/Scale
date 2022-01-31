import { GET_METHOD } from '../actions/methods'

const initialState = []

const methods = (state = initialState, action) => {
  switch (action.type) {
      case GET_METHOD:
          return action.method
    default:
      return state
  }
}

export default methods