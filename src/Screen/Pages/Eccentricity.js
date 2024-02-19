import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Homepage/Navbar';
import Footer from '../Homepage/Footer';

function EccentricityTest() {
    return (
        <div>
            <Navbar />
            <h1 className='font-bold text-center py-32'>EccentricityTest</h1>
            <div className='flex justify-center'>
                <input type='text' className='border p-2 m-2' placeholder='Enter Maximum Capacity' />
                <Link to="/repeatability-test">
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Next</button>
                </Link>
            </div>
            <Footer />
        </div>
    );
}

export default EccentricityTest;
