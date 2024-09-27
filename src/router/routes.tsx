import { createBrowserRouter } from "react-router-dom";
import Homepage from '../pages/Homepage';
import LoginPage from "../pages/LoginPage";
import RegisterPage from '../pages/RegisterPage';
import PersonalInformationalPage from "../pages/Account/PersonalInformationalPage";
import UserTypePage from "../pages/Account/UserTypePage";
import ProfessionPage from '../pages/Account/ProfessionPage';
import ActivityPage from '../pages/Account/ActivityPage';
import CompanyPage from '../pages/Account/CompagnyPage';

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
},
{
    path:'/step-three/profession',
    element:<ProfessionPage/>
},
{
    path:'/step-three/activities',
    element:<ActivityPage/>
},{
    path:'/step-three/company',
    element:<CompanyPage/>
}

])