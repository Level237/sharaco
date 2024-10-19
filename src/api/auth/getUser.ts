import axios from "axios"

export const getUser=async(token:string)=>{

    try {
        axios.defaults.headers.common['Authorization']=`Bearer ${token}`
        axios.defaults.headers.common['Accept']="application/json"
        const response=await axios.get(`http://127.0.0.1:8000/api/v1/user/me`)

        return response.data;
    } catch (error:any) {
        
    }
}