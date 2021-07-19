
import { GET_RULES} from '../actions/rules'

const initialState = []

const Rules = (state = initialState, action) => {
  switch (action.type) {
      case GET_RULES:
          return action.rules
    default:
      return state
  }
}

export default Rules

