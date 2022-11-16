import {applyMiddleware, combineReducers,createStore} from "redux";
import { modalReducer } from "../modal/modalReducer";
import { modal, task } from "../states/types";
import {composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { taskReducer } from "../tasks/taskReducer";

export interface rootState {
    modal:modal,
    task:task,
};

const middleware=[thunk];

const store = createStore<rootState,any,any,any>(combineReducers({
    modal:modalReducer,
    task:taskReducer,
}),composeWithDevTools(applyMiddleware(...middleware)))
export default store;