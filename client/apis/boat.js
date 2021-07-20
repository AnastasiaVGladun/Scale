import request from 'superagent'
import { getAuthorizationHeader } from 'authenticare/client'

const baseUrl = '/api/v1/boat'
const acceptJsonHeader = { Accept: 'application/json' }

export const postBoatListing = (newListing) => {
  return request.post(baseUrl)
    .set(acceptJsonHeader)
    .set(getAuthorizationHeader())
    .send(newListing)
    .then((response) => {
      return response.body
    })
    .catch(err => {
      console.log(err.message)
    })
}

export const fetchBoatListings = () => {
  return request.get(baseUrl)
  .set(getAuthorizationHeader())
  .then(response => {
    return response.body
  })
  .catch(err => {
    console.log('message', err.message)
  })
}
