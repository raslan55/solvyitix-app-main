

import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import IMG from '../../assets/images/Solvytix_Logo.png';
import { NavLink } from 'react-router-dom';
import LogoutButton from "../LogoutButton/LogoutButton";
import { Link } from "react-router-dom";
export default function MainNav() {

  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 text-sm transition-all duration-200 ${
      isActive
        ? "text-teal-700 font-semibold border-b-2 border-teal-700" 
        : "text-gray-700 dark:text-white hover:text-teal-700" 
    }`;
  return (
    <Navbar fluid rounded  className="sticky top-0 z-50 shadow-md" >
    <NavbarBrand >
    <Link to="/Home">
    <img src={IMG} className="mr-3 h-20 w-auto" alt="App Logo" />
    </Link>
    </NavbarBrand>
    <div className="flex md:order-2">
    <div className="hidden md:flex items-center gap-2">
    <LogoutButton />
    </div>
      <NavbarToggle />
    </div>
    <NavbarCollapse>
      <NavLink to="/Home" className={navLinkClass}>Home</NavLink>
       <NavLink to="/Courses" className={navLinkClass}>Courses</NavLink>
      <NavLink to="/Trainers" className={navLinkClass}>Trainers</NavLink>
     <NavLink to="/Payment" className={navLinkClass}>Payment</NavLink>
    <div className="block md:hidden mt-2">
      <LogoutButton />
    </div>
    </NavbarCollapse>
  </Navbar>
  );
}
