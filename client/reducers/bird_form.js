import { SET_BIRD_FORM_LISTING, ADD_BIRD_FORM_LISTING } from '../actions/bird_form'

const intialState = []

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case SET_BIRD_FORM_LISTING:
      return action.listing
    case ADD_BIRD_FORM_LISTING:
        return [...state, action.newListing]
      default:
      return state
  }
}

export default reducer
