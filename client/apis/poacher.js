import request from 'superagent'
import { getAuthorizationHeader } from 'authenticare/client'

const baseUrl = '/api/v1/poacher'
const acceptJsonHeader = { Accept: 'application/json' }

export const postPoacher = (poacherInfo) => {
  return request.post(baseUrl)
    .set(acceptJsonHeader)
    .set(getAuthorizationHeader())
    .send(poacherInfo)
    .then((response) => {
      return response.body
    })
    .catch(err => {
      console.log(err.message)
    })
}