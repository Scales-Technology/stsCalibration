import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './Screen/Homepage/Homepage';
import Login from './Screen/Pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={< HomePage />} />
        <Route path="login" element={< Login />} />
      </Routes>
    </Router>
  );
}

export default App;


