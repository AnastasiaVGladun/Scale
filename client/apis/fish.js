import request from 'superagent'

const baseUrl = '/api/v1/fish'

export const fetchFish = () => {
  return request.get(baseUrl)
    .then(response => {
      return response.body
    })
    .catch(err => {
      console.log(err.message)
    })
}