import { createSlice } from "@reduxjs/toolkit";

const quoteSlice=createSlice({
    name:'quote',
    initialState:{
        client_name:"Nom du Client",
        localisation:"Localisation",
        town:"",
        country:"",
        phone:""
    },

    reducers:{

        setClientName:(state,action)=>{
            state.client_name=action.payload.client_name
        },
        setLocalisation:(state,action)=>{
            state.localisation=action.payload.localisation
        }
    }
})

export const {setClientName,setLocalisation}=quoteSlice.actions
export default quoteSlice;