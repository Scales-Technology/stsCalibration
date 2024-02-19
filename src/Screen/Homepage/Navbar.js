import React from 'react';
import logo from '../../assets/STS logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto py-4 px-6">
        <nav className="flex justify-between items-center">
          <Link to="/homepage" className="flex items-center">
            <img src={logo} alt="Logo" className="h-16 w-18 mr-4" />
          </Link>
          <Link 
            to="/"
            className=" hover:bg-yellow-200 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Logout
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
