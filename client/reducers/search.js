import { CHANGE_SEARCH_FIELD } from "./constans"

const initialState = {
    searchField : ''
}

export const searchBox = (state = initialState, action = {}) => {
switch(action.type) {
    case CHANGE_SEARCH_FIELD:
      return {...state, searchField: action.payload};
    default:
        return state
    }
}
