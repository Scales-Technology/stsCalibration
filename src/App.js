import './App.css';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import HomePage from './Screen/Homepage/Homepage';
import Login from './Screen/Pages/Login';
import NewClient from './Screen/Pages/Newclient';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={< HomePage />} />
        <Route path="/login" element={< Login />} />
        <Route path="/new-client" element={< NewClient />} />
        <Route path="*" element={< Navigate to=" /" />} />
      </Routes>
    </Router>
  );
}

export default App;


