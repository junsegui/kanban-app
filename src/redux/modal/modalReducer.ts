import React from "react";
import { modal } from "../states/types";

const init:modal = {
    visible:false,
};

export const modalReducer = (state:modal=init,action:any) =>{
    const {type,payload} = action;
    switch(type){
        default:
            return state
    }
}