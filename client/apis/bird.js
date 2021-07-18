import request from 'superagent'
const baseUrl = '/api/v1/bird-info'



export function getAllBird () {
  return request.get('/api/v1/bird-info')
  .then((res) => {return res.body})
}
  

