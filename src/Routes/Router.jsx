import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import About from "../Pages/About";
import Career from "../Pages/Career";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Layouts/AuthLayout";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRoute from "../Components/PrivateRoute";
import LoadingEffect from "../Components/LoadingEffect";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <CategoryNews></CategoryNews>,
                hydrateFallbackElement: <LoadingEffect></LoadingEffect>,
                loader: () => fetch("/news.json")
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/career',
                element: <Career></Career>
            },
        ],
        
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>
            },
            {
                path: "/auth/register",
                element: <Register></Register>
            }
        ]
    },
    {
        path: "/news-details/:id",
        element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
        hydrateFallbackElement: <LoadingEffect></LoadingEffect>,
        loader: ()=> fetch('/news.json')
    }
])

export default router;