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
   export const getDiary = (catchInfo) => {
       return dispatch => {
         return fetchDiary(catchInfo)
           .then(data => {
             return dispatch(setDiary(data))
           })
       }
     }

     const addCatchToStore = (Fcatch) => {
        return {
          type: ADD_CATCH,
          Fcatch
        }
      }
      
      export const createCatch = (Fcatch) => { 
        return dispatch => {
          return postCatch(Fcatch)
            .then(newCatch => { 
              return dispatch(addCatchToStore(newCatch))
            })
        }
      }