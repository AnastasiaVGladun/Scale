import { SET_DIARY, ADD_CATCH } from '../actions/diary'

const intialState = []

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case SET_DIARY:
      return action.diary
    case ADD_CATCH:
        return [...state, action.fishcatch]
      default:
      return state
  }
}

export default reducer
