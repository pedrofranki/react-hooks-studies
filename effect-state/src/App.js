import React, { useState, useEffect } from 'react';
import * as api from './api';

function App() {
  const [repos, setRepos] = useState([]);
  const [repoState, setRepoState] = useState(false);
  const [repoInput, setRepoInput] = useState('');

  useEffect(
    () => {
      api.getReposPedro().then((resp) => {
        setRepos(resp.data);
      });
    }, [],
  );

  const handleSubmitForm = (e) => {
    e.preventDefault();
    api.getRepos(repoInput).then((resp) => setRepos(resp.data));
  };

  return (
    <>
      <ul>
        {repos.map((repo) => <li>{repo.name}</li>)}
      </ul>
      <form onSubmit={handleSubmitForm}>

        <input type="text" placeholder="Repositorio" onChange={(e) => setRepoInput(e.target.value)} />
        <button type="submit" onClick={() => setRepoState(!repoState)}>mudar</button>
      </form>
    </>
  );
}

export default App;
