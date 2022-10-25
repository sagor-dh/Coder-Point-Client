import { createBrowserRouter } from "react-router-dom";
import Cources from "../components/Cources/Cources";
import Home from "../components/Home/Home";
import Main from "../layout/Main";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/cources',
                element:<Cources/>,
                loader: async () => fetch('https://module-63-server.vercel.app/cources')
            }
        ]
    }
])