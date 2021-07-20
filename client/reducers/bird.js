import { GET_BIRD } from '../actions/bird'

const initialState = []

const bird = (state = initialState, action) => {
  switch (action.type) {
      case GET_BIRD:
          return action.bird
    default:
      return state
  }
}

export default bird




