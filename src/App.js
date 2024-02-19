import './App.css';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import HomePage from './Screen/Homepage/Homepage';
import Login from './Screen/Pages/Login';
import NewClient from './Screen/Pages/Newclient';
import NewScale from './Screen/Pages/NewScale';
import GenerateCertificate from './Screen/Pages/GenerateCert';
import EccentricityTest from './Screen/Pages/Eccentricity';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/homepage" element={< HomePage />} />
        <Route path="/" element={< Login />} />
        <Route path="/new-client" element={< NewClient />} />
        <Route path="/new-scale" element={< NewScale />} />
        <Route path="/generate-certificate" element={< GenerateCertificate />} />
        <Route path="/eccentricity-test" element={< EccentricityTest />} />
        <Route path="*" element={< Navigate to=" /" />} />
      </Routes>
    </Router>
  );
}

export default App;


