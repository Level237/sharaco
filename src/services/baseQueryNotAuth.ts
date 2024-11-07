import { fetchBaseQuery } from "@reduxjs/toolkit/query";


export const baseQueryNotAuth=fetchBaseQuery({
    baseUrl:"http://127.0.0.1:8000",
    credentials:"same-origin",
    
    prepareHeaders:(headers)=>{
        headers.set('Access-Control-Allow-Origin', '*')
        headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        headers.set("Content-Type", "application/json");
        headers.set('Content-Type',"multipart/form-data")
        return headers;
    }
})