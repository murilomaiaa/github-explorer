import React, { useState, FormEvent, useEffect } from 'react';
import { FiChevronsRight } from 'react-icons/fi/';
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.svg';

import { Title, Form, Repositories, Error } from './styles';
import api from '../../services/api';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  }
}

const Dasboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('')
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem('@GithubExplorer:repositories');

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:repositories',
      JSON.stringify(repositories)
    )
  }, [repositories])

  async function handleAddRepository(event: FormEvent<HTMLFormElement>):
    Promise<void> {
    event.preventDefault();

    if (!newRepo) {
      setInputError('Digite o "autor/nome" do repositório');
      return;
    }
    try {
      const { data: repository } = await api.get<Repository>(`repos/${newRepo}`)

      setRepositories([...repositories, repository])
      setNewRepo('')
      setInputError('')
    } catch (error) {
      setInputError('Erro na busca por esse repositório')
    }
  }

  return (
    <>
      <img src={logo} alt="Github Explorer" />
      <Title>Explore repositórios no github</Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map(repository => (
          <Link
            key={repository.full_name}
            to={`/repositories/${repository.full_name}`}
          >
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronsRight size={20} />
          </Link>
        ))}
      </Repositories>
    </>
  );
};

export default Dasboard;
