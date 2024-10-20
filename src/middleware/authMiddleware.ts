import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useSelector } from "react-redux";



const authMiddleware=(store:any)=>(next:any)=>(action:any)=>{

    const {type}=action;
    console.log(action)
    
   try {
    if(action.isAuthRequired){
        const { token } = useSelector((state:any) => state.auth);
        console.log(token)
        if(!token){
            const navigate=useNavigate()
            navigate('/login')
            return;
        }

        axios.defaults.headers.common['Authorization']=`Bearer ${token}`
        axios.post('http://127.0.0.1:8000/api/v1/user/me')
        .then((response:any)=>{
            next(action)
        }).catch((error:any) => {
            console.log(error)
        });
    }else{
        next(action)
    }
   } catch (error:any) {
    console.log(error)
   }
}

export default authMiddleware;