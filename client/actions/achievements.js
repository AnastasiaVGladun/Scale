import { fetchUsersAchievements } from "../apis/achievements";

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
      return fetchUsersAchievements()
        .then(userachievements=> {
          return dispatch(setAchievements(userachievements))
        })
    }
  }