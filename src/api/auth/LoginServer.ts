import axios from "axios"
import { getUrlApi } from "../getUrlApi"
import { getUser } from "./getUser";


export const Login=(credentials:any)=>async(dispatch:any)=>{
    try{
        const response=await axios.post(`http://127.0.0.1:8000/api/login`,credentials)
        const token=response.data.access_token;
        const user=await getUser(token)
        const userAndToken={
            user:user,
            token:token
        }
        //console.log(response)
        dispatch({type:'LOGIN_SUCCESS',payload:userAndToken})
    }
    catch(error:any){
        console.log(error)
        dispatch({type:'LOGIN_FAILURE',payload:error.response.data})
    }
}