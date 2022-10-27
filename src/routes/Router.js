import { createBrowserRouter } from "react-router-dom";
import Block from "../components/Block/Block";
import CheckOut from "../components/CheckOut/CheckOut";
import CoursDetails from "../components/CoursDetails/CoursDetails";
import Courses from "../components/Courses/Courses";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Fqa from "../components/Fqa/Fqa";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Registration from "../components/Registration/Registration";
import Main from "../layout/Main";
import PriviteRoute from "./PriviteRoute";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/home',
                element:<Home/>
            },
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/courses',
                element:<Courses/>,
                loader: async () => fetch('https://module-63-server.vercel.app/cources')
            },
            {
                path:'/details/:id',
                element:<CoursDetails/>,
                loader: async ({params}) => fetch(`https://module-63-server.vercel.app/cours/${params.id}`)
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/registration',
                element:<Registration/>
            },
            {
                path:'/premearAccess/:id',
                element:<PriviteRoute><CheckOut/></PriviteRoute>,
                loader: async ({params}) => fetch(`https://module-63-server.vercel.app/cours/${params.id}`)
            },
            {
                path:'/block',
                element:<Block/>
            },
            {
                path:'/fqa',
                element:<Fqa/>
            }
        ]
    }
])