import { fetchStats } from "../apis/stats";

export const SET_STATS = 'SET_STATS'

const setStats = (stats) => {
 return {
     type: SET_STATS,
     stats
 }
}

//thunk
export const getStats = (location) => {
    return dispatch => {
      return fetchStats(location)
        .then(stat => {
          return dispatch(setStats(stat))
        })
    }
  }
