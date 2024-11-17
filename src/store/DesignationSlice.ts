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
        },
        removeItem:(state:any,action)=>{
            console.log(action.payload.id)
            state.dataDesignation=state.dataDesignation.filter((el:any)=>{
                return el.id!==action.payload.id;
            })
        }
    }
})
export const {addDesignation,removeItem}=designationSlice.actions