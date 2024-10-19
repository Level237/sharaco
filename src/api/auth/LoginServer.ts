import axios from "axios"
import { getUrlApi } from "../getUrlApi"


export const Login=(credentials:any)=>async(dispatch:any)=>{
    try{
        const response=await axios.post(`http://127.0.0.1:8000/api/login`,credentials)
        const token=response.data.access_token;

        localStorage.setItem('token', token);
        dispatch({type:'LOGIN_SUCCESS',payload:token})
    }
    catch(error:any){
        console.log(error)
        dispatch({type:'LOGIN_FAILURE',payload:error.response.data})
    }
}