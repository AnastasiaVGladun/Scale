import { fetchDiary, addFishImg, addCatchData } from "../apis/diary";

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
             console.log(data)
             return dispatch(setDiary(data))
           })
       }
     }

     export function pushCatch (fishCatch) {
      return {
        type: ADD_CATCH,
        fishCatch: fishCatch
      }
    }
      

      export function addCatch (formImage, formData) {
        return dispatch => {
          return addFishImg(formImage)
            .then(fileUrl => {
              formData.image = fileUrl
              return addCatchData(formData)
                .then(catchId => {
                  formData.id = catchId
                  dispatch(pushCatch(formData))
                  return null
                })
            })
            .catch(err => {
              console.log('error in actions: ', err.message)
            })
        }
      }
      