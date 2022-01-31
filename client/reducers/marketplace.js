import { SET_MARKETPLACE_LISTING, ADD_MARKETPLACE_LISTING } from '../actions/marketplace'

const intialState = []

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case SET_MARKETPLACE_LISTING:
      return action.listing
    case ADD_MARKETPLACE_LISTING:
        return [...state, action.newListing]
      default:
      return state
  }
}

export default reducer
