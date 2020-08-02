/*arquivo que inicializa o react*/
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home/index';
import CadastroVideo from './pages/cadastro/Video'
import CadastroCategoria from './pages/cadastro/Categoria';
/*Faz o caminho entre as páginas*/
import {BrowserRouter, Switch, Route} from "react-router-dom"; 
import PaginaErro from './pages/Erro';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path = "/" component = {Home} exact/> 
      
      <Route component = {PaginaErro}/>
    </Switch>       
  </BrowserRouter>,
  document.getElementById('root') /*renderiza o react no root do index.html*/
);