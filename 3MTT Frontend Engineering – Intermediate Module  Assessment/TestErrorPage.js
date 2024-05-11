import React from 'react';

const TestErrorPage = () => {
  // Cause an error by accessing a non-existent property
  throw new Error('This is a test error!');

  return (
    <div>
      <h1>This page should not be displayed (Error Boundary Test)</h1>
    </div>
  );
};

export default TestErrorPage;
