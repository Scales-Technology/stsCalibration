import React from 'react';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="bg-gray-200 min-h-screen">
      <Navbar />
      <main className="container mx-auto py-20 text-center mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/new-client" className="bg-blue-200 rounded-lg p-6 block">
          <div >
            <h2 className="text-xl font-bold mb-4">Input Client Data</h2>
            <p className="text-gray-700">Click Here to Input a new Client data.</p>
          </div>
          </Link>
          <Link to="/new-scale" className="bg-green-200 rounded-lg p-6">
          <div >
            <h2 className="text-xl font-bold mb-4">Generate Certificate</h2>
            <p className="text-gray-700">Generate Calibration Certificate for registered Clients.</p>
          </div>
          </Link>
          <Link to="/generate-certificate" className="bg-yellow-200 rounded-lg p-6">
          <div >
            <h2 className="text-xl font-bold mb-4">View Certificates</h2>
            <p className="text-gray-700">View Generated Certificates.</p>
          </div>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
