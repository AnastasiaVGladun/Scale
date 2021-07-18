import { fetchAchievements } from "../apis/achievements";

export const SET_ACHIEVEMENTS = 'SET_ACHIEVEMENTS'

const setAchievements = (achievements) => {
 return {
     type: SET_ACHIEVEMENTS,
     achievements
 }
}

//thunk
export const getAchievements = () => {
    return dispatch => {
      return fetchAchievements()
        .then(achievement=> {
          return dispatch(setAchievements(achievement))
        })
    }
  }