import { fetchStats } from "../apis/stats";

export const SET_STATS = 'SET_STATS'

const setStats = (stats) => {
 return {
     type: SET_STATS,
     stats
 }
}

export const getStats = () => {
    return dispatch => {
      return fetchStats()
        .then(stat => {
          return dispatch(setStats(stat))
        })
    }
  }
