import axios from 'axios';


export const getReposPedro = () => axios.get('https://api.github.com/users/pedrofranki/repos');

export const getRepos = (repo) => axios.get(`https://api.github.com/users/${repo}/repos`);
