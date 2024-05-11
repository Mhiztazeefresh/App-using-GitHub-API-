const handleCreateRepoClick = () => {
    setIsCreateModalOpen(true);
  };
  
  const handleCreateRepoSubmit = (newRepoData) => {
    // Implement logic to create a new repo using your preferred API or service
    // (e.g., GitHub API with appropriate authentication)
    // Update `createdRepos` state with the newly created repo data
    setCreatedRepos([...createdRepos, newRepoData]);
    setIsCreateModalOpen(false);
  };
  