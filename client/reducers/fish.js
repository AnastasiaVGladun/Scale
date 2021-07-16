import { GET_FISH } from '../actions/fish'

const initialState = []

const fish = (state = initialState, action) => {
  switch (action.type) {
      case GET_FISH:
          return action.fish
    default:
      return state
  }
}

export default fish

