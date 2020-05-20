import { THROW_SESSION_ID } from '../action/throwSessionId'

const initializeState = {
  sessionID: ''
}

export default ( state = initializeState, action ) => {
  switch ( action.type ) {
    case THROW_SESSION_ID:
    console.log(action.value)
    return {
      ...state,
      sessionID: action.value
    }  

  
    default:
     return state
  }
}