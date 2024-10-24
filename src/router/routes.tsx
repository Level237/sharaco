import { createBrowserRouter } from "react-router-dom";
import Homepage from '../pages/Homepage';
import LoginPage from "../pages/LoginPage";
import RegisterPage from '../pages/RegisterPage';
import PersonalInformationalPage from "../pages/Account/PersonalInformationalPage";
import UserTypePage from "../pages/Account/UserTypePage";
import ProfessionPage from '../pages/Account/ProfessionPage';
import ActivityPage from '../pages/Account/ActivityPage';
import CompanyPage from '../pages/Account/CompagnyPage';
import AccountStepPage from '../pages/Account/AccountStepPage';
import { DashboardPage } from '../pages/Auth/DashboardPage';
import { DashboardLayout } from '../components/Layouts/DashboardLayout';
import { PrivateRoute } from "../pages/Auth/PrivateRoute";
import { GuardRoute } from "../pages/GuartRoute";


export const routes=createBrowserRouter([{
    path:'/',
    element:<Homepage/>
},
{
    path:'/login',
    element:<LoginPage/>
},{
    path:'/register',
    element:<GuardRoute> <RegisterPage/></GuardRoute>
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
},{
    path:'/step-final/account',
    element:<AccountStepPage/>
},{
    path:'/admin',
    element:<DashboardLayout><PrivateRoute/></DashboardLayout>,
    children:[
        {
            path:'dashboard',
            element:<DashboardPage/>
        }
    ]
}

])