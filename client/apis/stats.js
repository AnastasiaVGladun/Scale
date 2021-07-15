import request from 'superagent'

const baseUrl = '/api/v1/statistics'

export const fetchStats = (location) => {
  return request.get(`${baseUrl}/${location}/2021-06-01/2021-07-31`)
    .then(response => {
      return response.body
    })
    .catch(err => {
      console.log(err.message)
    })
}