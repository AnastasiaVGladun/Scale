import request from 'superagent'

const baseUrl = '/api/v1/diary'

// export const postCatch = (catchInfo) => {
//   return request.post(baseUrl)
//     .send(catchInfo)
//     .then((response) => {
//       return response.body
//     })
//     .catch(err => {
//       console.log(err.message)
//     })
// }

export const fetchDiary = () => {
  return request.get(baseUrl)
  .then(response => {
    return response.body
  })
  .catch(err => {
    console.log(err.message)
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
