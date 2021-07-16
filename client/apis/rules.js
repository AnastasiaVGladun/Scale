import request from 'superagent'
const baseUrl = '/api/v1/rules'



export function getAllRules () {
  return request.get('/api/v1/rules')
  .then((res) => {return res.body})
}
  




