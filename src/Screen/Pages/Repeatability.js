import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Homepage/Navbar';
import Footer from '../Homepage/Footer';

function RepeatabilityTest() {
    return (
        <div>
            <Navbar />
            <div className='text-center'>
            <h1 className='font-bold text-center py-32'>Repeatability Test</h1>
            <Link to="/linearity-test">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Next</button>
            </Link>
            </div>
            <Footer />
        </div>
    );
}

export default RepeatabilityTest;
