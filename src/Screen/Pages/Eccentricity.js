import React from 'react';

import Navbar from '../Homepage/Navbar';
import Footer from '../Homepage/Footer';

function EccentricityTest() {
    return (
        <div>
            <Navbar />
            <h1 className='font-bold text-center py-32'>EccentricityTest</h1>
            <div className='flex justify-center'>
                <input type='text' className='border p-2 m-2' placeholder='Enter Maximum Capacity' />
            </div>
            <Footer />
        </div>
    );
}

export default EccentricityTest;
