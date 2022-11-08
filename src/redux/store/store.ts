import {applyMiddleware, combineReducers,createStore} from "redux";
import { modalReducer } from "../modal/modalReducer";
import { modal } from "../states/types";
import {composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"

export interface rootState {
    modal:modal,
}

const initialState = {}

const middleware=[thunk]

const store = createStore<rootState,any,any,any>(combineReducers({
    modal:modalReducer,
}),composeWithDevTools(applyMiddleware(...middleware)))
export default store;