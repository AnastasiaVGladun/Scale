import request from 'superagent'

const baseUrl = '/api/v1/rules'

export const fetchRules = () => {
  return request.get(baseUrl)
    .then(response => {
      return response.body
    })
    .catch(err => {
      console.log(err.message)
    })
}

