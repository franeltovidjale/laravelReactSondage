import { createBrowserRouter, Navigate } from "react-router-dom";

import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Surveys from "./views/Surveys";
import SurveyView from "./views/surveyView";
import GuestLayouts from "./components/GuestLayouts";
import DefaultLayouts from "./components/DefaultLayouts";

const router = createBrowserRouter([

    {
        path:'/',
        element : <DefaultLayouts/>,
        children : [
            {
                path:'/dashboard',
                element: <Navigate to='/' />
            },
            {
                path:'/',
                element: <Dashboard />
            },
            {
                path:'/surveys',
                element: <Surveys />
            },
            {
                path:'/surveys/create',
                element: <SurveyView /> 
            },
        ]
    },
    {
        path:'/',
        element:<GuestLayouts />,
        children: [
            {
                path:'/login',
                element: <Login />
            },
            {
                path:'/signup',
                element: <Signup />
            },
        ]
    },
   

])

export default router;