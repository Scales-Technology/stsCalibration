import React from 'react';
import './Homepage.css'
import Login from '../Pages/Login';

function HomePage() {
    return (
        <div className="landing-page">
          <header>
            <nav>
              < Login />
            </nav>
          </header>
          
          
      
          
          <footer>
            <p>&copy; 2024 ScalesTech. All rights reserved.</p>
          </footer>
        </div>
      );
    }

export default HomePage;