import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Homepage/Navbar';
import Footer from '../Homepage/Footer';

function NewScale() {
  const [formData, setFormData] = useState({
    modelName: '',
    serialNumber: '',
    calibrationLocation: '',
    manufacturer: '',
    lab: 'Mass', 
    date: '',
    certificateNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="bg-gray-300 min-h-screen">
      <Navbar />
        <div className="container mx-auto py-32">
        <h1 className="text-2xl font-bold mb-8 text-center">New Scale Calibration</h1>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
            <div className="mb-4">
            <label htmlFor="modelName" className="block text-sm font-medium text-gray-700">Equipment to be calibrated (Model Name)</label>
            <input type="text" id="modelName" name="modelName" value={formData.modelName} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300" />
            </div>
            <div className="mb-4">
            <label htmlFor="serialNumber" className="block text-sm font-medium text-gray-700">Serial Number</label>
            <input type="text" id="serialNumber" name="serialNumber" value={formData.serialNumber} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300" />
            </div>
            <div className="mb-4">
            <label htmlFor="calibrationLocation" className="block text-sm font-medium text-gray-700">Location of Calibration</label>
            <input type="text" id="calibrationLocation" name="calibrationLocation" value={formData.calibrationLocation} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300" />
            </div>
            <div className="mb-4">
            <label htmlFor="manufacturer" className="block text-sm font-medium text-gray-700">Manufacturer</label>
            <input type="text" id="manufacturer" name="manufacturer" value={formData.manufacturer} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300" />
            </div>
            <div className="mb-4">
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
            <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300" />
            </div>
            <div className="mb-4">
            <label htmlFor="certificateNumber" className="block text-sm font-medium text-gray-700">Certificate Number</label>
            <input type="text" id="certificateNumber" name="certificateNumber" value={formData.certificateNumber} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300" />
            </div>
            <Link to="/eccentricity-test">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Next</button>
            </Link>
        </form>
        </div>
        <Footer />
    </div>
  );
}

export default NewScale;
