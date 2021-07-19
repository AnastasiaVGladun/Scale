import request from 'superagent'
import { getAuthorizationHeader } from 'authenticare/client'

const baseUrl = '/api/v1/diary'
const acceptJsonHeader = { Accept: 'application/json' }

export const postCatch = (catchInfo) => {
  return request.post(baseUrl)
    .send(catchInfo)
    .then((response) => {
      return response.body
    })
    .catch(err => {
      console.log(err.message)
    })
}

export const fetchDiary = () => {
  return request.get(baseUrl)
  .set(getAuthorizationHeader())
  .then(response => {
    return response.body
  })
  .catch(err => {
    console.log('message', err.message)
  })
}

export function addFishImg (fishImg) {
  return request.post(baseUrl + '/upload')
    .send(fishImg)
    .then(res => {
      return res.text
    })
}

export function addCatchData (formData) {
  return request.post(baseUrl)
    .send(formData)
    .then(res => {
      return res.body
    })
}
