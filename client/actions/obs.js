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
<<<<<<< HEAD
      
export const createObsListing = (listing) => { 
||||||| 11472b9
      
export const createObsLising = (listing) => { 
=======
 
//thunk
export const createObsListing = (obs) => { 
>>>>>>> ae9412e0eb03ad66f3f27cb817a8fbba0d9ff1a0
  return dispatch => {
    return postObsListing(obs)
      .then(newObs => { 
        return dispatch(addObsListingToStore(newObs))
      })
  }
}
