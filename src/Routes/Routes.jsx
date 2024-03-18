import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../page/login/Login";
import SignUp from "../page/Signup/SignUp";
import Home from "../page/Home/Home";
import Panel from "../page/Panel/Panel";





const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/> ,
        errorElement: '',
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/login',
                element:<Login/>,
            },
            {
                path:'/signup',
                element:<SignUp/>,
            },
            {
                path:'/panel-member',
                element:<Panel/>

            }
            
        ]
    }
])

export default router 