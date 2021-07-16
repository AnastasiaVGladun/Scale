import { SET_DIARY, ADD_CATCH } from '../actions/diary'

const intialState = []

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case SET_DIARY:
      return action.stats
    case ADD_CATCH:
        return [...state, action.catch]
      default:
      return state
  }
}

export default reducer
