import { fetchAchievements } from "../apis/achievements";

export const SET_LOCATIONS = 'SET_LOCATIONS'

const setAchievements = (achievements) => {
 return {
     type: SET_ACHIEVEMENTS,
     locations
 }
}

//thunk
export const getAchievements = () => {
    return dispatch => {
      return fetchAchievements()
        .then(locations=> {
          return dispatch(setAchievements(achievements))
        })
    }
  }