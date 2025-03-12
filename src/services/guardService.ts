
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryNotAuth } from "./baseQueryNotAuth";

export const guardService = createApi({
    baseQuery: baseQueryNotAuth,
    reducerPath: 'guardService',
    tagTypes: ['guard'],
    endpoints: (builder: any) => ({
        getProfessions: builder.query({
            query: () => ({
                url: '/api/professions',
                method: 'GET',
            }),
            providesTags: ['guard'],
        }),
    }),
})

export const { useGetProfessionsQuery } = guardService;