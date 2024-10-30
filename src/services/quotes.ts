import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./baseQueryWithReaut";


export const quoteService=createApi({
    baseQuery:baseQueryWithReauth,
    reducerPath:"quoteService",
    tagTypes:['Quotes'],
    endpoints:builder=>({
        getQuotes:builder.query({
            query:()=>'/api/v1/quotes',
            keepUnusedDataFor:5,
            providesTags:(result=[])=>[
                ...result.map(({id}:any)=>({type:'Quotes',id}) as const)
            ]
        }),
    }),
})

export const {
  useGetQuotesQuery
}=quoteService