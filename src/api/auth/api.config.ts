import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"


const baseQuery=fetchBaseQuery({
    baseUrl:"http://127.0.0.1:8000",
    credentials:"include",
    prepareHeaders:(headers,{getState})=>{
        const token= getState().auth.token;
        if(token){
            headers.set('authorization',`Bearer ${token}`)
        }

        return headers;
    }
})

const baseQueryWithReauth=async(args:any,api:any,extraOptions:any)=>{
    let result=await baseQuery(args,api,extraOptions)

    if(result?.error?.status===403){
        console.log('token refreshing')
        const refreshResult=await baseQuery('/refresh',api,extraOptions)
        console.log(refreshResult)

        if(refreshResult?.data){
            const user=api.getState().auth.user
        }
    }
}