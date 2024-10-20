import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useSelector } from "react-redux";



const authMiddleware=(store:any)=>(next:any)=>(action:any)=>{

    const {type}=action;

    if(action.isAuthRequired){
        const { user } = useSelector((state:any) => state.auth);

        if(!user){
            const navigate=useNavigate()
            navigate('/login')
            return;
        }

        
    }
}

export default authMiddleware;