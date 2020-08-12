import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Pages/home/App';
import CadastroVideo from './components/Pages/cadastro/Video';
import CadastroCategoria from './components/Pages/cadastro/Categoria';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

const Pagina404 = () => (<div>Página 404</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/cadastro/video" component={CadastroVideo} exact />
      <Route path="/cadastro/Categoria" component={CadastroCategoria} exact />
      <Route path="/" component={Home} exact  />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
