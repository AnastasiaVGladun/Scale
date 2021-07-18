import { fetchPoachers, postPoacher } from "../apis/poacher";

export const SET_POACHER = 'SET_POACHER'
export const ADD_POACHER = 'ADD_POACHERADD'

const setPoacher = (poacher) => {
    return {
        type: SET_POACHER,
        poacher
    }
}

   //thunk
export const getPoacher = () => {
  return dispatch => {
    return fetchPoachers()
      .then(data => {
        console.log(data)
        return dispatch(setPoacher(data))
      })
  }
}

//----------------------------------------------------------------

const addPoacherToStore = (newPoacher) => {
  return {
    type: ADD_POACHER,
    newPoacher
  }
}
      
export const createPoacher = (poacher) => { 
  return dispatch => {
    return postPoacher(poacher)
      .then(newPoacher => { 
        return dispatch(addPoacherToStore(poacher))
      })
  }
}
