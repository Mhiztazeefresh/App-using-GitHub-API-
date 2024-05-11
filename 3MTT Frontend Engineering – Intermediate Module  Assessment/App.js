import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RepoList from './components/RepoList';
import RepoDetails from './components/RepoDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RepoList />} />
        <Route path="/repos/:repoName" element={<RepoDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
