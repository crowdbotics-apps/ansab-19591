import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignUp12090849Reducer from '../features/SignUp12090849/redux/reducers'
import SignUp12190848Reducer from '../features/SignUp12190848/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignUp12090849: SignUp12090849Reducer,
SignUp12190848: SignUp12190848Reducer,

});