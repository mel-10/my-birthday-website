import React, { useState } from 'react';
import Countdown from 'react-countdown';
import Confetti from 'react-confetti';
import { Link } from 'react-router-dom';

const Home = () => {
  const [countdownComplete, setCountdownComplete] = useState(false);

  const handleCountdownComplete = () => {
    setCountdownComplete(true);
  };

  return (
    <div className="home container-fluid text-center py-5" style={{ backgroundColor: '#FFFFFF' }}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">Home</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/gallery" className="nav-link">Gallery</Link>
              </li>
              <li className="nav-item">
                <Link to="/quiz" className="nav-link">Quiz</Link>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              <i className="bi bi-person-circle fs-3 me-3"></i> {/* Example icon */}
              <i className="bi bi-bell fs-3"></i> {/* Example icon */}
            </div>
          </div>
        </div>
      </nav>
      <h1 className="display-2 mt-5" style={{ color: '#FF5733' }}><strong>Happy Birthday Atharv!</strong></h1>
      <Countdown date={'2024-05-29T00:00:00'} onComplete={handleCountdownComplete} className="mt-3 countdown" style={{ fontSize: '5rem', color: '#FF5733' }}/> {/* Adjust the countdown size */}
      {countdownComplete && <Confetti />}
      {/* Your other content */}
    </div>
  );
};

export default Home;
