import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import './index.css';

export default class MenuComum extends Component {
  render() {
    return (
        <div className="menu__engloba">
            <div className="menu__lateral">
                <Link to="/paginainicial"><img src={logo} /></Link>
                <nav className="menu__int">
                    <ul>
                        <Link to="/paginainicial"><li>Página Inicial</li></Link>
                        <Link to="#"><li>Relatório Atual</li></Link>
                        <Link to="/monitoramentomanual"><li>Monitoramento Manual</li></Link>
                        <Link to="#"><li>Cadastrar Equipamento</li></Link>
                        <Link to="#"><li>Deslogar</li></Link>
                    </ul>
                </nav>
                <div className="menu__auxiliary"></div>
            </div>
        </div>
    );
  }
}
