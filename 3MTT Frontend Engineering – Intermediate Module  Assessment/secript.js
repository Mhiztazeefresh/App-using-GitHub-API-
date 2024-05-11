// src/components/RepoList.js
import React, { useState, useEffect } from 'react';
import GithubService from '../services/github';
import { Link } from 'react-router-dom'; // For nested routes

const RepoList = () => {
  const [repos, setRepos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRepos = async (page = 1) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await GithubService.getRepos('your_username'); // Replace with your username
      setRepos(response);
      setTotalPages(Math.ceil(response.length / 20)); // Adjust for per_page
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRepos(currentPage);
  }, [currentPage]); // Refetch on page change

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      {isLoading && <p>Loading repositories...</p>}
      {error && <p>Error: {error.message}</p>}
      
