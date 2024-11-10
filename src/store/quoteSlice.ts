import { createSlice } from "@reduxjs/toolkit";

const quoteSlice=createSlice({
    name:'quote',
    initialState:{
        client_name:"Nom du Client",
        email:"Email",
        town:"Ville",
        country:"",
        phone:""
    },

    reducers:{

        setClient:(state,action)=>{
            state.client_name=action.payload.client_name;
            state.email=action.payload.email;
            state.town=action.payload.town;
            state.country=action.payload.country;
            state.phone=action.payload.phone;
        },
    }
})

export const {setClient}=quoteSlice.actions
export default quoteSlice;