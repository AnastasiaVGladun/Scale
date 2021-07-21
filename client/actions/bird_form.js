import { postBird_formListing, fetchBird_formListings } from "../apis/bird_form";

export const SET_BIRD_FORM_LISTING = 'SET_BIRD_FORM_LISTING'
export const ADD_BIRD_FORM_LISTING = 'ADD_BIRD_FORMADD_LISTING'

const setBird_formListing = (listing) => {
    return {
        type: SET_BIRD_FORM_LISTING,
        listing
    }
}

// thunk
export const getBird_formListings = () => {
  return dispatch => {
    return fetchBird_formListings()
      .then(data => {
        return dispatch(setBird_formListing(data))
      })
  }
}

//----------------------------------------------------------------

const addBird_formListingToStore = (newListing) => {
  return {
    type: ADD_BIRD_FORM_LISTING,
    newListing
  }
}
      
export const createBird_formListing = (listing) => { 
  return dispatch => {
    return postBird_formListing(listing)
      .then(newListing => { 
        return dispatch(addBird_formListingToStore(newListing))
      })
  }
}
