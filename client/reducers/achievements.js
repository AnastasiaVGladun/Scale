import { SET_ACHIEVEMENTS } from '../actions/achievements'

const intialState = []

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case SET_ACHIEVEMENTS:
      return action.achievements
      default:
      return state
  }
}

export default reducer