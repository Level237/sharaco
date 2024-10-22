import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate } from 'react-router-dom';



const api = axios.create({
    baseURL: 'http://127.0.0.1:8000', 
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' }
  });
  const { token } = useSelector((state:any) => state.auth);
api.interceptors.request.use(
    
    config=>{
        
        console.log(token)
        if(token){
            //config.headers.Accept="application/json"
            //config.defaults.headers.common['Authorization']=`Bearer ${token}`
            //config.headers.Authorization = `Bearer ${token}`;
        }

        return config
    },
    error=>{
        //const dispatch=useDispatch
        if (error.response && error.response.status === 401) {
            // Handle unauthorized error
            
            // Perform any logout actions or redirect to login page
          }
        //return Promise.reject(error);
    }
    
)

export default api;