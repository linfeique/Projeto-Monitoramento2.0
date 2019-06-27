import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { usuarioAutenticado } from './services/auth';

import * as serviceWorker from './serviceWorker';

import Login from './pages/Login/login';
import Register from './pages/Register/register';
import PaginaInicial from './pages/PaginaInicial/paginaInicial';
import MonitoramentoManual from './pages/MonitoramentoManual/moniManual';

const Permissao = ({ component : Component }) => (
    <Route 
        render = {props => usuarioAutenticado() ?
            (<Component {...props} />) :
            (<Redirect to={{ pathname: '/', state: {from: props.location} }} />)
        }
    />
);

const rotas = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/register" component={Register} />
                <Permissao path="/paginainicial" component={PaginaInicial} />
                <Permissao path="/monitoramentomanual" component={MonitoramentoManual} />
            </Switch>
        </div>
    </Router>
);

ReactDOM.render(rotas, document.getElementById('root'));

serviceWorker.unregister();
