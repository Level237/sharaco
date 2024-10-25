import { baseQuery } from "@/services/baseQuery";
import {createApi} from "@reduxjs/toolkit/query/react"




export const UserService=createApi({
    baseQuery:baseQuery,
    endpoints:builder=>({
        getUsers:builder.query({
            query:()=>'/api/v1/users',
            keepUnusedDataFor:5,
        })
    }),
})

export const {
    useGetUsersQuery
}=UserService