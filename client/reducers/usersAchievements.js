import {SET_USERS_ACHIEVEMENTS } from '../actions/achievements'

const intialState = []

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case SET_USERS_ACHIEVEMENTS:
      return action.usersachievements
      default:
      return state
  }
}

export default reducer