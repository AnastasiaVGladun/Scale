import { postObsListing, fetchObsListings } from "../apis/obs";

export const SET_OBS_LISTING = 'SET_OBS_LISTING'
export const ADD_OBS_LISTING = 'ADD_OBSADD_LISTING'

const setObsListing = (listing) => {
    return {
        type: SET_OBS_LISTING,
        listing
    }
}

// thunk
export const getObsListings = () => {
  return dispatch => {
    return fetchObsListings()
      .then(data => {
        return dispatch(setObsListing(data))
      })
  }
}

//----------------------------------------------------------------

const addObsListingToStore = (newListing) => {
  return {
    type: ADD_OBS_LISTING,
    newListing
  }
}
      
export const createObsListing = (listing) => { 
  return dispatch => {
    return postObsListing(listing)
      .then(newListing => { 
        return dispatch(addObsListingToStore(newListing))
      })
  }
}
