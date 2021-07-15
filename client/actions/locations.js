import { fetchLocations } from "../apis/locations";

export const SET_LOCATIONS = 'SET_LOCATIONS'

const setLocations = (locations) => {
 return {
     type: SET_LOCATIONS,
     locations
 }
}

//thunk
export const getLocations = () => {
    return dispatch => {
      return fetchLocations()
        .then(locations=> {
          return dispatch(setLocations(locations))
        })
    }
  }
