import { postPoacher } from "../apis/poacher";

export const ADD_POACHER = 'ADD_POACHERADD'

const addPoacherToStore = (newPoacher) => {
  return {
    type: ADD_POACHER,
    newPoacher
  }
}
      
export const createPoacher = (poacher) => { 
  return dispatch => {
    console.log(poacher)
    return postPoacher(poacher)
      .then(newPoacher => { 
        return dispatch(addPoacherToStore(newPoacher))
      })
  }
}