// src/services/github.js
import axios from 'axios';

const BASE_URL = 'https://api.github.com';

class GithubService {
  static async getRepos(username) {
    const url = `${BASE_URL}/users/${username}/repos?per_page=20`; // Adjust per_page for pagination
    const response = await axios.get(url, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
      },
    });
    return response.data;
  }

  static async getRepoDetails(username, repoName) {
    const url = `${BASE_URL}/repos/${username}/${repoName}`;
    const response = await axios.get(url);
    return response.data;
  }
}

export default GithubService;
