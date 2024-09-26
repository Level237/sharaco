import { createBrowserRouter } from "react-router-dom";
import Homepage from '../pages/Homepage';
import LoginPage from "../pages/LoginPage";
import RegisterPage from '../pages/RegisterPage';
import PersonalInformationalPage from "../pages/Account/PersonalInformationalPage";
import UserTypePage from "../pages/Account/UserTypePage";

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
    path:'/step-two/personal-information',
    element:<PersonalInformationalPage/>
},{
    path:'/step-one/user-type',
    element:<UserTypePage/>
}

])