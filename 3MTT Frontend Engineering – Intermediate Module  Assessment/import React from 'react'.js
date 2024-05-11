import React from 'react';
import { Link } from 'react-router-dom';
import Pagination from 'react-paginate';

const RepoList = ({ repos, perPage, currentPage, handlePageChange }) => {
  const pageCount = Math.ceil(repos.length / perPage);

  return (
    <div>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <Link to={`/repo/${repo.name}`}>{repo.name}</Link> - {repo.description}
          </li>
        ))}
      </ul>
      <Pagination
        pageCount={pageCount}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        onPageChange={handlePageChange}
        containerClassName="pagination"
        activeClassName="active"
        previousLabel="prev"
        nextLabel="next"
      />
    </div>
  );
};

export default RepoList;
