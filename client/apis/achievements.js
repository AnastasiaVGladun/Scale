import request from 'superagent'
import { getAuthorizationHeader } from 'authenticare/client'


const baseUrl = '/api/v1/diary/achievements'

export const fetchUsersAchievements = () => {
  return request.get(baseUrl)
  .set(getAuthorizationHeader())
  .then(response => {
    return response.body
  })
  .catch(err => {
    console.log('message', err.message)
  })
}

