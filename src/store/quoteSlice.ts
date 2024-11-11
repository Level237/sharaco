import { createSlice } from "@reduxjs/toolkit";

const quoteSlice=createSlice({
    name:'quote',
    initialState:{
        id:"",
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
        setClientId:(state,action)=>{
            state.id=action.payload.id
        }
    }
})

export const {setClient,setClientId}=quoteSlice.actions
export default quoteSlice;