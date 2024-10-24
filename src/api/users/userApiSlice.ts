import { apiSlice } from "../apiSlice";

export const usersApiSlice=apiSlice.injectEndpoints({
    endpoints:builder=>({
        getUsers:builder.query({
            query:()=>'/api/v1/users',
            keepUnusedDataFor:5,
        })
    })
})

export const {
    useGetUsersQuery
}=usersApiSlice