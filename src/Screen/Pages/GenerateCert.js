import React, { useState } from 'react';
import Navbar from '../Homepage/Navbar';
import Footer from '../Homepage/Footer';
import html2canvas from 'html2canvas'; 
import jsPDF from 'jspdf'; 
import companyHeader from '../../assets/Asset 1.png';

function GenerateCertificate() {
    const [certificateData, setCertificateData] = useState({
        requestedBy: 'Jerry Test',
        address: 'Scales Technologies',
        equipment: 'PS6X Weighing Instrument',
        typeModel: 'Model PS6X',
        serialNo: '123456',
        location: 'Scales Technologies',
        manufacturer: 'Aclas',
        lab: 'Mass',
        calibrationDate: new Date().toLocaleDateString(),
        certificateNo: '123456',
        stickerNo: '126'
    });

    const calculateExpirationDate = (calibrationDate) => {
        const dateParts = calibrationDate.split('/'); 
        const newDate = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]); 
        newDate.setFullYear(newDate.getFullYear() + 1); 
        return newDate.toLocaleDateString(); 
    };

    const handleDownload = () => {
        const input = document.getElementById('certificate');
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('portrait', 'mm', 'a4');
                pdf.addImage(imgData, 'PNG', 0, 0, 210, 297); 
                pdf.save('certificate.pdf');
            });
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow p-32">
                <button onClick={handleDownload} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Download Certificate</button>
                <div id="certificate" className="w-full h-full border p-8 ">
                    <div className="flex justify-center items-center">
                        <img src={companyHeader} alt="header" />
                    </div>

                    <h1 className="text-3xl text-center font-bold mb-4">CALIBRATION CERTIFICATE</h1>
                    <div className="grid grid-cols-2 gap-x-2">
                        <div className="flex flex-col">
                            <p className="mb-1"><strong>REQUESTED BY</strong></p>
                            <p className="mb-1"><strong>ADDRESS</strong></p>
                            <p className="mb-1"><strong>EQUIPMENT</strong></p>
                            <p className="mb-1"><strong>TYPE/MODEL</strong></p>
                            <p className="mb-1"><strong>SERIAL NO</strong></p>
                            <p className="mb-1"><strong>LOCATION</strong></p>
                            <p className="mb-1"><strong>MANUFACTURER</strong></p>
                            <p className="mb-1"><strong>LAB</strong></p>
                            <p className="mb-1"><strong>CALIBRATION DATE</strong></p>
                            <p className="mb-1"><strong>CERTIFICATE NO</strong></p>
                            <p className="mb-1"><strong>STICKER NO</strong></p>
                        </div>
                        <div className="flex flex-col">
                            <p className="mb-1">:{certificateData.requestedBy}</p>
                            <p className="mb-1">:{certificateData.address}</p>
                            <p className="mb-1">:{certificateData.equipment}</p>
                            <p className="mb-1">:{certificateData.typeModel}</p>
                            <p className="mb-1">:{certificateData.serialNo}</p>
                            <p className="mb-1">:{certificateData.location}</p>
                            <p className="mb-1">:{certificateData.manufacturer}</p>
                            <p className="mb-1">:{certificateData.lab}</p>
                            <p className="mb-1">:{certificateData.calibrationDate}</p>
                            <p className="mb-1">:{certificateData.certificateNo}</p>
                            <p className="mb-1 z">:{certificateData.stickerNo}</p>
                        </div>
                    </div>
                    <h2 className="text-lg font-bold mt-4">1.0 REFERENCE STANDARDS AND EQUIPMENT USED</h2>
                    <p>1.1: The weighing instrument was calibrated in accordance to EURAMET cg-18; 2015</p>
                    <p>1.2: Standard masses of class F1 Serial No. STSSL 23 were used in the calibration of the test instrument.</p>
                    <p>1.3: These standards are traceable to the National standards</p>
                    <h2 className="text-lg font-bold">2.0 METROLOGICAL TRACEABILITY</h2>
                    <p>2.1: This calibration certificate traceability is to the national measurement standards (KEBS), and documentation is available in the laboratory.</p>
                    <h2 className="text-lg font-bold">3.0 CALIBRATION PROCEDURE</h2>
                    <p>3.1: The calibration was done in accordance to Guideline in EURAMET cg-18; 2015 and as documented in calibration procedure No. STSL-SOP-M-01 "Measurement procedure for non automatic weighing instruments". The tests included: Repeatability, Eccentricity and Error of indications.</p>
                    <h2 className="text-lg font-bold">4.0 VALIDITY</h2>
                    <p>4.1: This calibration certificate expires on {calculateExpirationDate(certificateData.calibrationDate)} but the client is at liberty to have the weighing instrument recalibrated at preferred intervals.</p>
                    <div className="flex flex-wrap">
                        <div className="flex-1">
                            <p>Calibrated by: TECHNICAL MANAGER</p>
                            <p>Date: {certificateData.calibrationDate}</p>
                            <p>Signed by: TECHNICAL MANAGER</p>
                        </div>
                        <div className="flex-1">
                            <p>Checked by:</p>
                            <p>Date:</p>
                        </div>
                    </div>
                    <div className="italic mt-4">
                        <p>Calibration certificate without signature and official Scale Technology Solution LTD seal is invalid. This certificate has been issued without any alteration. This Certificate is only valid for the instrument calibrated and for the period indicated therein.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default GenerateCertificate;
