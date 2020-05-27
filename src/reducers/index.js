import {getInitialState, ONE_FIELD_SETTERS} from './reducerUtils'


export default (state = getInitialState(), action) => {
    /*

    * */
	return {
    ...state,
    [ONE_FIELD_SETTERS[action.type]]: action.payload,
  }
};
