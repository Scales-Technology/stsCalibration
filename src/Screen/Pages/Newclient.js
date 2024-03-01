import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Homepage/Navbar';
import Footer from '../Homepage/Footer';


function NewClient() {

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Redirect to another page
    window.location.href = '/new-scale';
  };

  return (
    <div className="bg-gray-300 min-h-screen">
      <Navbar />
      <main className="container mx-auto py-32">
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-bold mb-4 text-center">Register a New Client</h1>
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" name="name" className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300" />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
              <input type="tel" id="phone" name="phone" className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300" />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
              <input type="text" id="address" name="address" className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300" />
            </div>
            <div className="col-span-2 flex justify-end">
              {/* <Link to="/new-scale" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Next</Link> */}
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Register</button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default NewClient;
