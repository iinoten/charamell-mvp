import { 
  UPDATE_SELECTED_COLOR, 
  ONCHANGE_TIME_VALUE, 
  UPDATE_FIRST_ICON, 
  UPDATE_SECOND_ICON, 
  UPDATE_NAME_VALUE, 
  UPDATE_MESSAGE_VALUE,
  UPDATE_FIRST_TAG_MESSAGE,
  UPDATE_SECOND_TAG_MESSAGE,
  UPDATE_ICON_IMAGE_NUMBER
} from '../action/makeCharamell'

const initialState = {
  selectedColor: 0,
  waitingTimeValue: 3,
  selectedFirstTagIcon: '',
  selectedSecondTagIcon: '',
  nameValue: '',
  messageValue: '',
  firstTagMessage: '',
  secondTagMessage: '',
  slectedIconImageNumber: null
}

export default ( state=initialState, action ) => {
  switch (action.type) {
    case UPDATE_SELECTED_COLOR:
      if( state.selectedColor == 2 ) {
        return {
          ...state,
          selectedColor: 0
        }
      } else {
        return {
          ...state,
          selectedColor: state.selectedColor+1
        }
      }
    case ONCHANGE_TIME_VALUE:
      return {
        ...state,
        waitingTimeValue: action.value
      }
    case UPDATE_FIRST_ICON:
    return {
      ...state,
      selectedFirstTagIcon: action.value
    }
    case UPDATE_SECOND_ICON:
      return {
        ...state,
        selectedSecondTagIcon: action.value
      }
    case UPDATE_NAME_VALUE:
      return {
        ...state,
        nameValue: action.value
      }
    case UPDATE_MESSAGE_VALUE:
      return {
        ...state,
        messageValue: action.value
      }
    case UPDATE_FIRST_TAG_MESSAGE:
      return {
        ...state,
        firstTagMessage: action.value
      }
    case UPDATE_SECOND_TAG_MESSAGE:
    return {
      ...state,
      secondTagMessage: action.value
    }
    case UPDATE_ICON_IMAGE_NUMBER:
      console.log(action.value,"dede")
      return {
        ...state,
        slectedIconImageNumber: action.value
      }
    default:
      return state;
  }
}