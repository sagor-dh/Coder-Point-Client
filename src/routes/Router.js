import { createBrowserRouter } from "react-router-dom";
import CoursDetails from "../components/CoursDetails/CoursDetails";
import Courses from "../components/Courses/Courses";
// import Courses from "../components/Courses/Courses";
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
                path:'/courses',
                element:<Courses/>,
                loader: async () => fetch('https://module-63-server.vercel.app/cources')
            },
            {
                path:'/details/:id',
                element:<CoursDetails/>,
                loader: async ({params}) => fetch(`https://module-63-server.vercel.app/cours/${params.id}`)
            }
        ]
    }
])