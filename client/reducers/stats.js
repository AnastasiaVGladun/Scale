import { SET_STATS } from '../actions/stats'

const intialState = []

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case SET_STATS:
      return action.stats
      default:
      return state
  }
}

export default reducer