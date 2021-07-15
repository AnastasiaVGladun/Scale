import { SET_LOCATIONS } from '../actions/locations'

const intialState = []

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case SET_LOCATIONS:
      return action.locations
      default:
      return state
  }
}

export default reducer