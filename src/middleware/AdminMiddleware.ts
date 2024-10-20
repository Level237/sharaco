import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useSelector } from "react-redux";



const authMiddleware=(store:any)=>(next:any)=>(action:any)=>{

    const {type}=action;


        const { user } = useSelector((state:any) => state.auth);

        if(!user){
            const navigate=useNavigate()
            navigate('/login')
            return;
        }
        if(action.role===1){
            next(action)
        }else{
            const navigate=useNavigate()
            navigate(-1)
            return;
        }
        
    
}

export default authMiddleware;