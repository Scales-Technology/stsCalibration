import React from 'react';
// import Navbar from '../Homepage/Navbar';
import logo from '../../assets/STS logo.png';
import Footer from '../Homepage/Footer';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="bg-gray-300 min-h-screen">
      {/* <Navbar /> */}
      <header className="bg-white shadow-md fixed top-0 left-0 w-full z-10">
        <div className="container mx-auto py-4 px-6">
          <nav className="flex justify-between items-center">
            <div className="flex items-center">
              <img src={logo} alt="Logo" className="h-16 w-18 mr-4" />
            </div>
          </nav>
        </div>
      </header>
      <div className="flex justify-center items-center h-screen ">
        <div className="bg-white shadow-md rounded-lg p-6 w-96"> 
          <h1 className="text-2xl font-bold mb-4">Login</h1>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Enter your username"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center justify-between">
              <Link to="homepage">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign In
              </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
