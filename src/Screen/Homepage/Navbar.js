import React from 'react';
import logo from '../../assets/STS logo.png';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto py-4 px-6">
        <nav className="flex justify-between items-center">
          <NavLink to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-14 w-auto mr-4" />
          </NavLink>
          <NavLink 
            to="/login"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            activeClassName="bg-blue-700"
          >
            Login
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
