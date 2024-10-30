import { baseQuery } from "@/services/baseQuery";
import {createApi} from "@reduxjs/toolkit/query/react"
import { baseQueryWithReauth } from "./baseQueryWithReaut";




export const userService=createApi({
    baseQuery:baseQueryWithReauth,
    reducerPath:"userService",
    tagTypes:['Users'],
    endpoints:builder=>({
        getUsers:builder.query({
            query:()=>'/api/v1/users',
            keepUnusedDataFor:5,
            providesTags:(result=[])=>[
                ...result.map(({id}:any)=>({type:'Users',id}) as const)
            ]
        }),
    }),
})

export const {
   useGetUsersQuery
}=userService