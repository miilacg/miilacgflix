/*arquivo que inicializa o react*/
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from "react-router-dom";  /*Faz o caminho entre as páginas*/
import Home from './pages/Home/index';
import CadastroVideo from './pages/cadastro/Video'
import CadastroCategoria from './pages/cadastro/Categoria';
import './index.css';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path = "/" component = {Home} exact/> 
      <Route path = "/cadastro/Video" component = {CadastroVideo}/>
      <Route path = "/cadastro/Categoria" component = {CadastroCategoria}/>
      <Route component = {() => (<div>Página 404</div>)}/>
    </Switch>       
  </BrowserRouter>,
  document.getElementById('root') /*renderiza o react no root do index.html*/
);