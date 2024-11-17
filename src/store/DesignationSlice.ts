import { createSlice } from "@reduxjs/toolkit";
import { DesignationType } from '../types/Designation';

export const designationSlice=createSlice({
    name:'designation',
    initialState:{
        dataDesignation:[],
        total:0
    },
    reducers:{
        addDesignation:(state:any,action)=>{
            state.dataDesignation=[...state.dataDesignation,action.payload.designationObject];
        }
    }
})
export const {addDesignation}=designationSlice.actions