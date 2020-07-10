import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom'
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi'

import logo from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles'

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (<>
    <Header>
      <img src={logo} alt="GitHub Explorer" />
      <Link to="/">
        <FiChevronsLeft size={16} />
        Voltar
      </Link>
    </Header>
    <RepositoryInfo>
      <header>
        <img src="https://avatars0.githubusercontent.com/u/56596799?v=4" alt="Murilo Maia" />
        <div>
          <strong>mrlmaia/pwfinal</strong>
          <p>repository description</p>
        </div>
      </header>
      <ul>
        <li>
          <strong>1000</strong>
          <span>stars</span>
        </li>
        <li>
          <strong>70</strong>
          <span>forks</span>
        </li>
        <li>
          <strong>81</strong>
          <span>issues abertas</span>
        </li>
      </ul>
    </RepositoryInfo>

    <Issues>
      <Link
        to={`#`}
      >
        <div>
          <strong>Issue</strong>
          <p>Texto da issue</p>
        </div>
        <FiChevronsRight size={20} />
      </Link>
    </Issues>
  </>)
}

export default Repository;
