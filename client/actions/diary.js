import { fetchDiary, postCatch } from "../apis/diary";

export const SET_DIARY = 'SET_DIARY'
export const ADD_CATCH = 'ADD_CATCH'

const setDiary = (diary) => {
    return {
        type: SET_DIARY,
        diary
    }
   }

   //thunk
   export const getDiary = () => {
       return dispatch => {
         return fetchDiary()
           .then(data => {
             return dispatch(setDiary(data))
           })
       }
     }

     const addCatchToStore = (fishcatch) => {
        return {
          type: ADD_CATCH,
          fishcatch
        }
      }
      
      export const createCatch = (fishcatch) => { 
        return dispatch => {
          return postCatch(fishcatch)
            .then(newCatch => { 
              return dispatch(addCatchToStore(newCatch))
            })
        }
      }