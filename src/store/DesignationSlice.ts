import { createSlice } from "@reduxjs/toolkit";
import { DesignationType } from '../types/Designation';

export const designationSlice=createSlice({
    name:'designation',
    initialState:{
        dataDesignation:[],
    },
    reducers:{
        addDesignation:(state:any,action)=>{
            console.log(action.payload.designationObject)
            state.dataDesignation=[...state.dataDesignation,action.payload.designationObject];
        }
    }
})
export const {addDesignation}=designationSlice.actions