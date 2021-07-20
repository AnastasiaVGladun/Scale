import { SET_OBS_LISTING, ADD_OBS_LISTING } from '../actions/obs'

const intialState = []

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case SET_OBS_LISTING:
      return action.listing
    case ADD_OBS_LISTING:
        return [...state, action.newListing]
      default:
      return state
  }
}

export default reducer
