import React from 'react';
import { useParams } from 'react-router-dom';

const RepoDetails = () => {
  const { repoName } = useParams();

  // Replace with your actual logic to fetch details based on 'repoName'

  return (
    <div>
      <h1>Repo Details for: {repoName}</h1>
      {/* Display repo details here */}
    </div>
  );
};

export default RepoDetails;
