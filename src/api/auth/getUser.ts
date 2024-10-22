import axios from "axios"
import api from "../interceptor-axios";

export const getUser=async()=>{

    try {
        
        const response=await api.get(`/api/v1/user/me`)
        console.log(response)
        return response.data;
    } catch (error:any) {
        console.log(error)
    }
}