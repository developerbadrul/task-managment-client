import { Button, Navbar } from "flowbite-react";
import {  NavLink } from "react-router-dom";

const MyNavbar = () => {
    return (
        <Navbar fluid rounded>
            <Navbar.Brand href="https://flowbite-react.com">
                <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Button>Login</Button>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
            <NavLink className={({ isActive, isPending }) =>`md:p-3 ${isActive ? 'border-b-2 border-red-500' : 'border-b-2'} ${isPending ? 'pending' : ''}` } to="/">Home</NavLink>
                <NavLink className={({ isActive, isPending }) =>`md:p-3 ${isActive ? 'border-b-2 border-red-500' : 'border-b-2'} ${isPending ? 'pending' : ''}`} to="features">Features</NavLink>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MyNavbar;