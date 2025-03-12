
import { createApi } from "@reduxjs/toolkit/query/react"
import { baseQueryNotAuth } from "./baseQueryNotAuth";
import { baseQueryWithReauth } from "./baseQueryWithReaut";




export const authService = createApi({
    baseQuery: baseQueryWithReauth,
    reducerPath: "authService",
    tagTypes: ['Auth'],
    endpoints: builder => ({
        login: builder.mutation({
            query: (credentials) => (
                {
                    url: '/api/login',
                    method: 'POST',
                    body: credentials
                }),

            transformErrorResponse: (baseQueryResult, error, arg) => {
                // Ici, vous pouvez personnaliser la réponse d'erreur
                console.log(baseQueryResult)
                if (baseQueryResult.status === 400) {
                    return { error: "l'email et le mot de passe ne peut pas etre vide" };
                } else if (baseQueryResult.status === 500) {
                    return { error: "l'email out le mot de passe sont incorrect" };
                }
                else {
                    console.log("sdhgs")
                    return { error: baseQueryResult.data };
                }
            },
        },

        ),
        logout: builder.mutation({
            query: () => ({
                url: "/api/v1/logout",
                method: "POST",
            }),
            invalidatesTags: ['Auth']
        }),
        register: builder.mutation({
            query: (credentials) => ({
                url: "/api/register",
                method: "POST",
                body: credentials
            })
        }),
        getUser: builder.query({

            query: () => '/api/v1/user/me',
            providesTags: ['Auth'],
            transformErrorResponse: (baseQueryResult, error, arg) => {
                // Ici, vous pouvez personnaliser la réponse d'erreur
                console.log("dd")
                if (baseQueryResult.status === 401) {
                    return { error: "l'email et le mot de passe ne peut pas etre vide" };
                } else if (baseQueryResult.status === 500) {
                    return { error: "l'email out le mot de passe sont incorrect" };
                }
                else {
                    console.log("sdhgs")
                    return { error: baseQueryResult.data };
                }
            },
        })
    })
})

export const {
    useLoginMutation,
    useGetUserQuery,
    useLogoutMutation,
    useRegisterMutation
} = authService