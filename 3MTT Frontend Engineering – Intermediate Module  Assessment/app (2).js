// src/components/Pagination.js
import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (pageNumber) => {
    onPageChange(pageNumber);
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <ul>
        {currentPage > 1 && (
          <li onClick={() => handlePageChange(currentPage - 1)}>
            Previous
          </li>
        )}
        {pageNumbers.map((pageNumber) => (
          <li
            key={pageNumber}
            className={pageNumber === currentPage ? 'active' : ''}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        ))}
        {currentPage < totalPages && (
          <li onClick={() => handlePageChange(currentPage + 1)}>
            Next
          </li>
        )}
      </ul>
    </div>
  );
};

export default Pagination;
