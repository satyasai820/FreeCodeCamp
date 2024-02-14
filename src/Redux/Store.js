

import { createStore } from "redux"
import rootReducer from "./Reducers/rootReducer";
import Reducer from "./Reducers/reducer";

const Store = createStore(rootReducer);

export default Store;