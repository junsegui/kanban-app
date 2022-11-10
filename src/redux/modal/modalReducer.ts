import React from "react";
import { modal } from "../states/types";
import { TOGGLE_MODAL } from "./actionModal";

const init:modal = {
    visible:false,
};

export const modalReducer = (state:modal=init,action:any) =>{
    const {type,payload} = action;
    switch(type){
        case TOGGLE_MODAL:
            return{
                ...state,
                visible:!state.visible,
            }

        
        default:
            return state
    }
}