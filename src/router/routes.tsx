import { createBrowserRouter } from "react-router-dom";
import Homepage from '../pages/Homepage';
import LoginPage from "../pages/LoginPage";
import RegisterPage from '../pages/RegisterPage';
import PersonalInformationalPage from "../pages/Account/PersonalInformationalPage";

export const routes=createBrowserRouter([{
    path:'/',
    element:<Homepage/>
},
{
    path:'/login',
    element:<LoginPage/>
},{
    path:'/register',
    element:<RegisterPage/>
},
{
    path:'/step-one/personal-information',
    element:<PersonalInformationalPage/>
}

])