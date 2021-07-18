import request from 'superagent'
const baseUrl = '/api/v1/methods'



export function getAllMethods () {
  return request.get(baseUrl)
  .then((res) => {return res.body})
}