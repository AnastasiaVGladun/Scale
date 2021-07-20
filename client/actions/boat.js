import { postBoatListing, fetchBoatListings } from "../apis/boat";

export const SET_BOAT_LISTING = 'SET_BOAT_LISTING'
export const ADD_BOAT_LISTING = 'ADD_BOAT_LISTING'

const setBoatListing = (boat) => {
    return {
        type: SET_BOAT_LISTING,
        boat
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

const addBoatListingToStore = (boat) => {
  return {
    type: ADD_BOAT_LISTING,
    boat
  }
}

//thunk
export const createBoatLising = (boat) => { 
  return dispatch => {
    return postBoatListing(boat)
      .then(newBoatListing => { 
        return dispatch(addBoatListingToStore(newBoatListing))
      })
  }
}
