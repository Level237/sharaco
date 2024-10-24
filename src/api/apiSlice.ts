import { logOut, setCredentials } from "@/store/authSlice";
import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"


const baseQuery=fetchBaseQuery({
    baseUrl:"http://127.0.0.1:8000",
    credentials:"same-origin",
    prepareHeaders:(headers,{getState})=>{
        const token= getState().auth.token;
        if(token){
            headers.set("Content-Type", "application/json");
            headers.set('authorization',`Bearer ${token}`)
        }

        return headers;
    }
})



export const apiSlice=createApi({
    baseQuery:baseQuery,
    endpoints:builder=>({})
})