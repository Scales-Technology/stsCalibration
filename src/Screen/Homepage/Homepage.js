import React from 'react';
import Navbar from './Navbar.js';
import Footer from './Footer.js';

function HomePage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <main className="container mx-auto py-32 text-center mt-28"> 
        <h1 className="font-bold text-2xl">ScalesTech Calibration Certs Generator</h1>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
