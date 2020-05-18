import { unsupportedProp } from "@material-ui/core";

export const UPDATE_SELECTED_COLOR = 'UPDATE_SELECTED_COLOR'
export const ONCHANGE_TIME_VALUE = 'ONCHANGE_TIME_VALUE'
export const UPDATE_FIRST_ICON = 'UPDATE_FIRST_ICON'
export const UPDATE_SECOND_ICON = 'UPDATE_SECOND_ICON'
export const UPDATE_NAME_VALUE = 'UPDATE_NAME_VALUE'
export const UPDATE_MESSAGE_VALUE = 'UPDATE_MESSAGE_VALUE'
export const UPDATE_FIRST_TAG_MESSAGE = 'UPDATE_FIRST_TAG_MESSAGE'
export const UPDATE_SECOND_TAG_MESSAGE = 'UPDATE_SECOND_TAG_MESSAGE'
export const UPDATE_ICON_IMAGE_NUMBER = 'UPDATE_ICON_IMAGE_NUMBER'

export const updateSelectedColor = () => ({
  type: UPDATE_SELECTED_COLOR,
})

export const onChangeTimeValue = ( value ) => ({
  type: ONCHANGE_TIME_VALUE,
  value
})

export const updateFirstIcon = ( value ) => ({
  type: UPDATE_FIRST_ICON,
  value
})

export const updateSecondIcon= ( value ) => ({
  type: UPDATE_SECOND_ICON,
  value
})

export const updateNameValue = ( value ) => ({
  type: UPDATE_NAME_VALUE,
  value
})

export const updateMessageValue = ( value ) => ({
  type: UPDATE_MESSAGE_VALUE,
  value
})

export const updateFirstTagMessage = ( value ) => ({
  type: UPDATE_FIRST_TAG_MESSAGE,
  value
})

export const updateSecondTagMessage = ( value ) => ({
  type: UPDATE_SECOND_TAG_MESSAGE,
  value
})

export const updateIconImageNumber = ( value ) => ({
  type: UPDATE_ICON_IMAGE_NUMBER,
  value
})