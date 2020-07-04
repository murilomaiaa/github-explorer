import React from 'react';
import { FiChevronsRight } from 'react-icons/fi/';

import logo from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dasboard: React.FC = () => (
  <>
    <img src={logo} alt="Github Explorer" />
    <Title>Explore repositórios no github</Title>

    <Form>
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="test">
        <img
          src="https://avatars2.githubusercontent.com/u/56596799?s=400&v=4"
          alt="Murilo Maia"
        />
        <div>
          <strong>pwfinal</strong>
          <p>Trabalho final de pw</p>
        </div>

        <FiChevronsRight size={20} />
      </a>
      <a href="test">
        <img
          src="https://avatars2.githubusercontent.com/u/56596799?s=400&v=4"
          alt="Murilo Maia"
        />
        <div>
          <strong>pwfinal</strong>
          <p>Trabalho final de pw</p>
        </div>

        <FiChevronsRight size={20} />
      </a>
      <a href="test">
        <img
          src="https://avatars2.githubusercontent.com/u/56596799?s=400&v=4"
          alt="Murilo Maia"
        />
        <div>
          <strong>pwfinal</strong>
          <p>Trabalho final de pw</p>
        </div>

        <FiChevronsRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dasboard;
