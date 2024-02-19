import React from 'react';

function Footer() {
  const currentDate = new Date().toLocaleDateString();

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-900 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {currentDate} STSCalibration. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;


