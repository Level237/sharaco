import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./baseQueryWithReaut";


export const clientService=createApi({
    baseQuery:baseQueryWithReauth,
    reducerPath:"clientService",
    tagTypes:['Clients'],
    endpoints:builder=>({
        getClients:builder.query({
            query:()=>'/api/v1/clients',
            keepUnusedDataFor:5,
            providesTags:(result=[])=>[
                ...result.map(({id}:any)=>({type:'Clients',id}) as const)
            ]
        }),
        addClient:builder.mutation({
            query:(data)=>(
                {
                    url:'/api/v1/clients',
                    method:"POST",
                    body:data
                }
            )
        }),
    }),
})

export const {
  useGetClientsQuery,
  useAddClientMutation
}=clientService