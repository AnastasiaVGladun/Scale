import { SET_BOAT_LISTING, ADD_BOAT_LISTING } from '../actions/boat'

const intialState = []

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case SET_BOAT_LISTING:
      return action.listing
    case ADD_BOAT_LISTING:
        return [...state, action.newListing]
      default:
      return state
  }
}

export default reducer