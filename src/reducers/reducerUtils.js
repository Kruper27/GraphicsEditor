import {
  SET_OBJECTS,
  SET_CURRENT_OBJECT_TYPE,
  SET_CURRENT_ACTION_TYPE,
  SET_COLOR,
  SET_SELECTED_OBJECT_IDS,
  SET_STROKE,
  SET_HISTORY,
  SET_FUTURE,
} from '../actions/types'
import {
  DEFAULT_OBJECT,
  DEFAULT_ACTION,
  DEFAULT_COLOR,
  DEFAULT_STROKE,
} from '../constants'

export const ONE_FIELD_SETTERS = {
  [SET_OBJECTS]: 'objects',
  [SET_CURRENT_OBJECT_TYPE]: 'currentObjectType',
  [SET_CURRENT_ACTION_TYPE]: 'currentActionType',
  [SET_SELECTED_OBJECT_IDS]: 'selectedObjectIds',
  [SET_COLOR]: 'color',
  [SET_STROKE]: 'stroke',
  [SET_HISTORY]: 'history',
  [SET_FUTURE]: 'future',
}


export const getInitialState = () => ({
  /*
  * its a starting state
  * */
  color: DEFAULT_COLOR,
  objects: [],
  currentObjectType: DEFAULT_OBJECT,
  currentActionType: DEFAULT_ACTION,
  selectedObjectIds: [],
  stroke: DEFAULT_STROKE,
  history: [],
  future: [],
})
