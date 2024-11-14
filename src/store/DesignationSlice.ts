import { createSlice } from "@reduxjs/toolkit";
import { DesignationType } from '../types/Designation';

export const designationSlice=createSlice({
    name:'designation',
    initialState:{
        data:[],
    },
    reducers:{
        addDesignation:(state:any,action)=>{
            
            state.data=[...state.data,action.payload.designationObject];
            console.log(state.data)
        }
    }
})
export const {addDesignation}=designationSlice.actions