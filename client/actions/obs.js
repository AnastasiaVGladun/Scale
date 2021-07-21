import { postObsListing, fetchObsListings } from "../apis/obs";

export const SET_OBS_LISTING = 'SET_OBS_LISTING'
export const ADD_OBS_LISTING = 'ADD_OBSADD_LISTING'

const setObsListing = (obs) => {
    return {
        type: SET_OBS_LISTING,
        obs
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

const addObsListingToStore = (newObs) => {
  return {
    type: ADD_OBS_LISTING,
    newObs
  }
}
 
//thunk
export const createObsListing = (obs) => { 
  return dispatch => {
    return postObsListing(obs)
      .then(newObs => { 
        return dispatch(addObsListingToStore(newObs))
      })
  }
}
