import { Outlet } from "react-router-dom";
import MyNavbar from "./components/MyNavbar/MyNavbar";
import MyFooter from "./components/MyFooter/MyFooter";
import "./App.css"
const Root = () => {
    return (
        <div>
            <MyNavbar></MyNavbar>
            <Outlet></Outlet>
            <MyFooter></MyFooter>
        </div>
    );
};

export default Root;