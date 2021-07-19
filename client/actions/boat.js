import { postBoatListing, fetchBoatListings } from "../apis/boat";

export const SET_BOAT_LISTING = 'SET_BOAT_LISTING'
export const ADD_BOAT_LISTING = 'ADD_BOAT_LISTING'

const setBoatListing = (listing) => {
    return {
        type: SET_BOAT_LISTING,
        listing
    }
}

// thunk
export const getBoatListings = () => {
  return dispatch => {
    return fetchBoatListings()
      .then(data => {
        return dispatch(setBoatListing(data))
      })
  }
}

//----------------------------------------------------------------

const addBoatListingToStore = (newListing) => {
  return {
    type: ADD_BOAT_LISTING,
    newListing
  }
}
      
export const createBoatLising = (listing) => { 
  return dispatch => {
    return postBoatListing(listing)
      .then(newListing => { 
        return dispatch(addBoatListingToStore(newListing))
      })
  }
}
