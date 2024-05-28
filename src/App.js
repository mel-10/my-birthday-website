import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Quiz from './pages/Quiz';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="*" element={<NotFound />} /> {/* Fallback route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
