import axios from "axios"
import { getUrlApi } from "../getUrlApi"


export const Login=(credentials:any)=>async(dispatch:any)=>{
    try{
        const response=await axios.post(`${getUrlApi}/api/login`,credentials)
        const token=response.data.access_token;

        console.log(token)
        dispatch({type:'LOGIN_SUCCESS',payload:token})
    }
    catch(error:any){
        console.log(error)
        dispatch({type:'LOGIN_FAILURE',payload:error.response.data})
    }
}