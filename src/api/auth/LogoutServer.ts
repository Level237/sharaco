import axios from "axios"

export const Logout=(token:string)=>async(dispatch:any)=>{
    dispatch({ type: 'API_PROTECTED', isAuthRequired: true });
    try {
        
        axios.defaults.headers.common['Authorization']=`Bearer ${token}`
        
        axios.defaults.headers.common['Accept']="application/json"
    axios.post(`http://127.0.0.1:8000/api/v1/logout`).then((response:any)=>{
        console.log(response)
        dispatch({type:'LOGOUT'})
        localStorage.removeItem('persist:auth');
    }).catch((e:any)=>{
        console.log(e.response.data)
        console.log(token)
        const message={
            message:"Une erreur s'est produite"
        }
        dispatch({type:'ERROR',payload:message})
    })
      

    } catch(error:any){
        console.log("s")
        //dispatch({type:'LOGIN_FAILURE',payload:error.response.data})
    }

}