import React from 'react';

import logo from '../../assets/logo.svg';

import { Title, Form } from './styles';

const Dasboard: React.FC = () => (
  <>
    <img src={logo} alt="Github Explorer" />
    <Title>Explore repositórios no github</Title>

    <Form>
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>
  </>
);

export default Dasboard;
