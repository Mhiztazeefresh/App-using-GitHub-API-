import React from 'react';
import ErrorBoundary from './ErrorBoundary'; // Import the Error Boundary component
import TestErrorPage from './TestErrorPage'; // Import the test page

function App() {
  return (
    <ErrorBoundary>
      <TestErrorPage /> {/* Wrap the TestErrorPage with Error Boundary */}
    </ErrorBoundary>
  );
}

export default App;
