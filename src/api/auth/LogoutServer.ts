import axios from "axios"

export const Logout=(token:string)=>async(dispatch:any)=>{

    try {
        axios.defaults.headers.common['Authorization']=`Bearer ${token}`
        axios.defaults.headers.common['Accept']="application/json"
    axios.post(`http://127.0.0.1:8000/api/v1/logout`).then((response:any)=>{
        console.log(response)
        dispatch({type:'LOGOUT'})
        localStorage.removeItem('persist:auth');
    }).catch((e:any)=>{
        dispatch({type:'LOGIN_FAILURE',payload:e.response.data})
    })
      

    } catch(error:any){
        console.log("ds")
        dispatch({type:'LOGIN_FAILURE',payload:error.response.data})
    }

}