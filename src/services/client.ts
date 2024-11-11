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
        getClient:builder.query({
            query:(id)=>`/api/v1/clients/${id}`,
            keepUnusedDataFor:3,
        }),
        addClient:builder.mutation({
            query:(formData)=>({
                url:'/api/v1/clients',
                method:"POST",
                body:formData,
        })
        }),
        deleteClient:builder.mutation({
            query:(id)=>({
                url:`/api/v1/clients/${id}`,
                method:'DELETE'
            }),
            invalidatesTags:['Clients']
        })
    }),
})

export const {
  useGetClientsQuery,
  useAddClientMutation,
  useDeleteClientMutation,
  useGetClientQuery
}=clientService