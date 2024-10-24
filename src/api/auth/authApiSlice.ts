import { apiSlice } from "../apiSlice";


export const authApiSlice=apiSlice.injectEndpoints({
    endpoints:builder=>({
        login:builder.mutation({
            query:(credentials)=>(
                console.log(credentials),
                {
                url:'/api/login',
                method:'POST',
                body:credentials
            }),
            
            transformErrorResponse: (baseQueryResult, error, arg) => {
                // Ici, vous pouvez personnaliser la réponse d'erreur
                
                 if(baseQueryResult.status===400){
                    return { error: "l'email et le mot de passe ne peut pas etre vide" };
                }else if(baseQueryResult.status===500){
                    return { error: "l'email out le mot de passe sont incorrect" };
                }
                else {
                  return { error: 'Une erreur s\'est produite' };
                }
              },
        })
    })
})

export const {
    useLoginMutation
}=authApiSlice