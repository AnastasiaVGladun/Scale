import request from 'superagent'

const baseUrl = '/api/v1/diary'

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