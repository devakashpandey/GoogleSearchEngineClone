// 1. asigning the initial state 
export const initialState = {
   term:null
}

// 2. defining the action
export const action = {
   SET_SEARCH_TERM : "SET_SEARCH_TERM"
}

// 3. making a reducer function
const reducer = (state, action) =>{
      switch(action.type){
         case "SET_SEARCH_TERM" :
                      return{
                          ...state, 
                          term: action.term
                      }
        default : return state
      }   
}

export default reducer;