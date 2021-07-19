import request from 'superagent'

const baseUrl = '/api/v1/diary/achievements'
const userUrl = '/api/v1/diary/achievements/allusers'

export const fetchAchievements = () => {
  return request.get(baseUrl)
  .then(response => {
    return response.body
  })
  .catch(err => {
    console.log('message', err.message)
  })
}

export const fetchUsersAchievements = () => {
  return request.get(userUrl)
  .then(response => {
    return response.body
  })
  .catch(err => {
    console.log('message', err.message)
  })
}

