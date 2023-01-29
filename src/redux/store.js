import classListReducer from "./classListReducer"
import { combineReducers,createStore } from "redux";

const totalReducer = combineReducers({
    classListReducer,
    
})

const store = createStore(totalReducer);

export default store