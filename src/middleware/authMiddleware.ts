import { useNavigate } from "react-router-dom";
import axios from 'axios';


const authMiddleware=(store:any)=>(next:any)=>(action:any)=>{

    const {type}=action;

    if(action.isAuthRequired){
        const token=localStorage.getItem('token');

        if(!token){
            const navigate=useNavigate()
            navigate('/login')
            return;
        }

        axios.defaults.headers.commons['Authorization']=`Bearer ${token}`;

        axios.post('/api/v1/user/me')
        .then((response:any)=>{
            next(action)
        }).catch((error:any) => {
            const navigate = useNavigate();
            navigate('/login');
        });
    }else{
        next(action)
    }
}

export default authMiddleware;