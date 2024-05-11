import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RepoItem = ({ match }) => {
  const [repo, setRepo] = useState(null);

  useEffect(() => {
    const fetchRepo = async () => {
      const response = await axios.get(
        `https://api.github.com/repos/${match.params.username}/${match.params.repo}`
      );
      setRepo(response.data);
    };

    fetchRepo();
  }, [match.params]);

  if (!repo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
      {/* Display additional repo details (language, stars, etc.) here */}
    </div>
  );
};

export default RepoItem;
