import React from "react";
import { modal } from "../states/types";
import { TOGGLE_COLUMN_MODAL, TOGGLE_MODAL } from "./actionModal";

const init:modal = {
    visible:false,
    column:false
};

export const modalReducer = (state:modal=init,action:any) =>{
    const {type,payload} = action;
    switch(type){
        case TOGGLE_MODAL:
            return{
                ...state,
                visible:!state.visible,
            }
        case TOGGLE_COLUMN_MODAL:
            return{
                ...state,
                column:!state.column
            }
        
        default:
            return state
    }
}