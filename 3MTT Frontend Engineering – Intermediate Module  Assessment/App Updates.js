import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import RepoList from './RepoList';
import RepoItem from './RepoItem'; // Import RepoItem component
import ErrorBoundary from './ErrorBoundary';
import NotFoundPage from './NotFoundPage';
import CreateRepoModal from './CreateRepoModal'; // New import
import './App.css';

// Import libraries for modal
import { ModalProvider } from 'react-modal';
import styled from '@emotion/styled';
