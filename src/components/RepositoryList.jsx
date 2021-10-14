import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

// https://api.github.com/users/Igor-Ponticelli/repos

export function RepositoryList(){
  const [ repositories, setRepositories ] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/Igor-Ponticelli/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios de Igor Patrick Ponticelli</h1>

      <ul>
        {repositories.map(repository => {
          return  <RepositoryItem
          key={repository.name}
          repository={repository} />
        } )}

       
      </ul>
    </section>
  );
}