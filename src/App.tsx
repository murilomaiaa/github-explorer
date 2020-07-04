import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

const App: React.FunctionComponent = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

export default App;
