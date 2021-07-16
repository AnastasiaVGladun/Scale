import request from 'superagent'

const baseUrl = '/api/v1/diary/achievements'

export const fetchAchievements = () => {
  return request.get(baseUrl)
    .then(response => {
      return response.body
    })
    .catch(err => {
      console.log(err.message)
    })
}