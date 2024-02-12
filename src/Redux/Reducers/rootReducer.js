import { combineReducers } from "redux";
import Reducer from "./reducer";
import Reducer2 from "./reducer2";






const rootReducer = combineReducers({
    Reducer2,
    Reducer
});


export default rootReducer;