import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./Pages/Home/Home";
import Features from "./Pages/Features/Features";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "features",
                element: <Features></Features>,
            },
        ],
    },
    {
        path: "login",
        element: <Login></Login>
    },
    {
        path: "register",
        element: <Register></Register>
    }
])