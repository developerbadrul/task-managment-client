import { Button, Navbar } from "flowbite-react";
import {  Link, NavLink } from "react-router-dom";

const MyNavbar = () => {
    return (
        <Navbar fluid rounded>
            <Navbar.Brand href="/">
                <img src="https://micronet.work/demo/wp-content/uploads/2023/04/demo_logo.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Button><Link to="login">login</Link></Button>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
            <NavLink className={({ isActive, isPending }) =>`md:p-3 text-xl ${isActive ? 'border-b-2 border-red-500' : 'border-b-3'} ${isPending ? 'pending' : ''}` } to="/">Home</NavLink>
                <NavLink className={({ isActive, isPending }) =>`md:p-3 text-xl ${isActive ? 'border-b-2 border-blue-500' : 'border-b-3'} ${isPending ? 'pending' : ''}`} to="features">Features</NavLink>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MyNavbar;