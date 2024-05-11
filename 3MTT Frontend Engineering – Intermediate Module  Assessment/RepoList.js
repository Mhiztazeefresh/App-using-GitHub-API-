import React from 'react';
import { Link } from 'react-router-dom';

const RepoList = ({ repos }) => {
  // Replace with your actual data fetching logic for 'repos'
  const sampleRepos = [
    { name: 'repo1' },
    { name: 'repo2' },
    { name: 'repo3' },
  ];

  return (
    <ul>
      {sampleRepos.map((repo) => (
        <li key={repo.name}>
          <Link to={`/repos/${repo.name}`}>{repo.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default RepoList;
