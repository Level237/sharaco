
import {createApi} from "@reduxjs/toolkit/query/react"
import { baseQueryNotAuth } from "./baseQueryNotAuth";




export const authService=createApi({
    baseQuery:baseQueryNotAuth,
    endpoints:builder=>({
        login:builder.mutation({
            query:(credentials)=>(
                {
                url:'/api/login',
                method:'POST',
                body:credentials
            }),
            
            transformErrorResponse: (baseQueryResult, error, arg) => {
                // Ici, vous pouvez personnaliser la réponse d'erreur
                console.log(baseQueryResult)
                 if(baseQueryResult.status===400){
                    return { error: "l'email et le mot de passe ne peut pas etre vide" };
                }else if(baseQueryResult.status===500){
                    return { error: "l'email out le mot de passe sont incorrect" };
                }
                else {
                    console.log("sdhgs")
                  return { error: baseQueryResult.data };
                }
              },
        },
        
        ),
        logout:builder.mutation({
            query:()=>({
                url:"/api/v1/logout",
                method:"POST",
            })
        }),
        getUser:builder.query({
                query:()=>'/api/v1/user/me',
        })
    })
})

export const {
    useLoginMutation
}=authService