import React from 'react';
// import Login from '../Pages/Login';
import { NavLink } from 'react-router-dom';

function HomePage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow-md">
        <div className="container mx-auto py-4 px-6">
          <nav className="flex justify-between items-center">
            <h1 className="text-xl font-bold">Your Logo Here</h1>
            < NavLink 
            to="/login"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            activeClassName="bg-blue-700">
            Login
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="container mx-auto py-6">
        {/* Your main content goes here */}
      </main>

      <footer className="bg-gray-900 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 ScalesTech. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
