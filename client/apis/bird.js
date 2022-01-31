import request from 'superagent'
const baseUrl = '/api/v1/bird-info'



export function getAllBird () {
  return request.get(baseUrl)
  .then((res) => {return res.body})
}
  

