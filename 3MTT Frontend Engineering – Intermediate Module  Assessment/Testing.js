import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App'; // Your main application component
import NotFoundPage from './NotFoundPage'; // Import the 404 component

function Root() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} /> {/* Main app route */}
        <Route path="*" element={<NotFoundPage />} /> {/* Catch-all for 404 */}
      </Routes>
    </Router>
  );
}

export default Root;
