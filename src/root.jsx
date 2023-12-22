import { Outlet } from "react-router-dom";
import MyNavbar from "./components/MyNavbar/MyNavbar";
import MyFooter from "./components/MyFooter/MyFooter";
import Container from "./components/Container/Container";
import "./App.css"
const Root = () => {
    return (
        <div>
            <MyNavbar></MyNavbar>
            <Container>
                <Outlet></Outlet>
            </Container>
            <MyFooter></MyFooter>
        </div>
    );
};

export default Root;