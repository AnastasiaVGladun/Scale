import { getAllFish } from '../apis/fish'

export const GET_FISH = 'GET_FISH'

const setFish = (fish) => {
  return {
    type: GET_FISH,
    fish
  }
}

export const getFish = () => {
  return dispatch => {
    return getAllFish()
      .then(fish => {
        return dispatch(setFish(fish))
      })
  }
}


