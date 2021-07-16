import request from 'superagent'
const baseUrl = '/api/v1/fish-info'



export function getAllFish () {
  return request.get('/api/v1/fish-info')
  .then((res) => {return res.body})
}
  

