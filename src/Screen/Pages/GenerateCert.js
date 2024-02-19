import React from 'react';

import Navbar from '../Homepage/Navbar';
import Footer from '../Homepage/Footer';

function GenerateCertificate() {
    return (
        <div>
            <Navbar />
            <h1 className='font-bold text-center py-32'>Generate Certificate</h1>
            <Footer />
        </div>
    );
}

export default GenerateCertificate;
