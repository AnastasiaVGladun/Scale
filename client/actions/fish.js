import {getFish} from '../apis/fish'

export const SET_FISH = 'SET_FISH'

const setFish = (fish) => {
  return {
    type: SET_FISH,
    rules
  }
}
export const getFish = () => {
  return dispatch => {
    return fetchFish()
      .then(rules => {
        return dispatch(setFish(fish))
      })
  }
}