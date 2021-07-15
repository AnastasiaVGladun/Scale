import request from 'superagent'

const baseUrl = '/api/v1/statistics'

export const fetchStats = () => {
  return request.get(baseUrl)
    .then(response => {
      return response.body
    })
    .catch(err => {
      console.log(err.message)
    })
}