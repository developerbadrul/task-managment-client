import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./Pages/Home/Home";
import Features from "./Pages/Features/Features";

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
        ]
    }
])