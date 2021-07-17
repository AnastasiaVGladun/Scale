import { fetchAchievements } from "../apis/achievements";

export const SET_ACHIEVEMENTS = 'SET_ACHIEVEMENTS'

const setAchievements = (achievements) => {
 return {
     type: SET_ACHIEVEMENTS,
     diary
 }
}

//thunk
export const getAchievements = () => {
    return dispatch => {
      return fetchAchievements()
        .then(achievements=> {
          return dispatch(setAchievements(achievements))
        })
    }
  }