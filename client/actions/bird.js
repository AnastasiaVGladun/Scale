import { getAllBird } from '../apis/bird'

export const GET_BIRD = 'GET_BIRD'

const setBird = (bird) => {
  return {
    type: GET_BIRD,
    bird
  }
}

export const getBird = () => {
  return dispatch => {
    return getAllBird()
      .then(bird => {
        return dispatch(setBird(bird))
      })
  }
}


