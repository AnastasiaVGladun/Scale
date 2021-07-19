import { fetchAchievements, fetchUsersAchievements } from "../apis/achievements";

export const SET_ACHIEVEMENTS = 'SET_ACHIEVEMENTS'
export const SET_USERS_ACHIEVEMENTS = 'SET_USERS_ACHIEVEMENTS'

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

const setUsersAchievements = (usersachievements) => {
 return {
     type: SET_USERS_ACHIEVEMENTS,
     usersachievements
 }
}

//thunk
export const getUsersAchievements = () => {
    return dispatch => {
      return fetchUsersAchievements()
        .then(userachievement=> {
          return dispatch(setUsersAchievements(userachievement))
        })
    }
  }